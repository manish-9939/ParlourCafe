import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCalendarCheck, FaMagic, FaBars, FaTimes } from 'react-icons/fa';
import './BottomNav.css';

const BottomNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <>
            {/* Overlay Menu when Hamburger is clicked */}
            <div className={`bottom-menu-overlay ${showMenu ? 'active' : ''}`}>
                <div className="bottom-menu-content">
                    <h3>Menu</h3>
                    <ul>
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/booking" onClick={toggleMenu}>Book Appointment</Link></li>
                        <li><Link to="/ai-stylist" onClick={toggleMenu}>AI Stylist</Link></li>
                        <li><Link to="/services" onClick={toggleMenu}>Our Services</Link></li>
                        <li><a href="/#gallery" onClick={toggleMenu}>Gallery</a></li>
                        <li><a href="/#testimonials" onClick={toggleMenu}>Testimonials</a></li>
                    </ul>
                    <button className="close-menu-btn" onClick={toggleMenu}><FaTimes /></button>
                </div>
            </div>

            {/* Fixed Bottom Navigation Bar */}
            <nav className="bottom-nav">
                <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <FaHome />
                    <span>Home</span>
                </Link>

                <Link to="/booking" className={`nav-item ${location.pathname === '/booking' ? 'active' : ''}`}>
                    <FaCalendarCheck />
                    <span>Book</span>
                </Link>

                <div className="nav-item mid-btn">
                    <Link to="/ai-stylist" className="floating-action-btn">
                        <FaMagic />
                    </Link>
                </div>

                <div className="nav-item" onClick={toggleMenu}>
                    <FaBars />
                    <span>Menu</span>
                </div>
            </nav>
        </>
    );
};

export default BottomNav;
