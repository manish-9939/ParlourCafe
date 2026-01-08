import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
    return (
        <footer style={{
            background: '#050505',
            padding: '100px 0 40px',
            borderTop: '1px solid var(--glass-border)',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container">
                <div className="grid-2" style={{ gap: '100px', marginBottom: '80px', alignItems: 'flex-start' }}>

                    {/* Brand Section */}
                    <div style={{ maxWidth: '400px' }}>
                        <h2 className="logo" style={{ fontSize: '2rem', marginBottom: '30px', display: 'block' }}>
                            PARLOUR <span className="text-gold">CAFÉ</span>
                        </h2>
                        <p style={{ color: 'var(--gray)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px' }}>
                            Providing premium beauty and grooming services in India since 2026. Your destination for artisan style and luxury care.
                        </p>
                        <div style={{ display: 'flex', gap: '25px' }}>
                            <a href="#" style={{ color: 'var(--white)', transition: '0.3s' }}><Instagram size={20} /></a>
                            <a href="#" style={{ color: 'var(--white)', transition: '0.3s' }}><Facebook size={20} /></a>
                            <a href="#" style={{ color: 'var(--white)', transition: '0.3s' }}><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: '40px',
                        width: '100%'
                    }}>
                        <div>
                            <h4 style={{ color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '25px' }}>Quick Links</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <li><Link to="/" style={{ color: 'var(--gray)', textDecoration: 'none', transition: '0.3s' }}>Home</Link></li>
                                <li><Link to="/services" style={{ color: 'var(--gray)', textDecoration: 'none', transition: '0.3s' }}>Services</Link></li>
                                <li><Link to="/ai-stylist" style={{ color: 'var(--gray)', textDecoration: 'none', transition: '0.3s' }}>AI Stylist</Link></li>
                                <li><Link to="/booking" style={{ color: 'var(--gray)', textDecoration: 'none', transition: '0.3s' }}>Book Appointment</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '25px' }}>Contact Us</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--gray)', fontSize: '0.9rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={16} /> Mumbai, Maharashtra, India</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Phone size={16} /> +91 98765 43210</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Mail size={16} /> hello@parlourcafe.in</li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{ color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '25px' }}>Support</h4>
                            <Link to="/booking" className="btn-premium" style={{
                                padding: '12px 20px',
                                fontSize: '0.7rem',
                                border: '1px solid var(--glass-border)',
                                background: 'transparent',
                                color: 'var(--white)',
                                display: 'inline-flex'
                            }}>
                                Get Help <ArrowUpRight size={14} style={{ marginLeft: '5px' }} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <p style={{ color: 'var(--gray)', fontSize: '0.8rem', letterSpacing: '1px' }}>
                        &copy; {new Date().getFullYear()} PARLOUR CAFÉ. ALL RIGHTS RESERVED.
                    </p>
                    <div style={{ display: 'flex', gap: '30px' }}>
                        <a href="#" style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.8rem' }}>Privacy Policy</a>
                        <a href="#" style={{ color: 'var(--gray)', textDecoration: 'none', fontSize: '0.8rem' }}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
