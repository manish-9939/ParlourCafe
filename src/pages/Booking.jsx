import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Mail, CheckCircle } from 'lucide-react';
import '../index.css';

const Booking = () => {
    const [submitted, setSubmitted] = useState(false);
    const location = useLocation();

    // Parse service from URL
    const queryParams = new URLSearchParams(location.search);
    const initialService = queryParams.get('service') || 'Facial';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: initialService,
        date: '',
        time: ''
    });

    // Update service if URL changes (e.g., user clicks another link while on page)
    useEffect(() => {
        const s = queryParams.get('service');
        if (s) setFormData(prev => ({ ...prev, service: s }));
    }, [location.search]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const availableServices = [
        'Packages', 'Facial', 'Clean up', 'Bleach', 'De-Tan',
        'Waxing', 'Mani & Pedi', 'Hair Care', 'Body Polish',
        'Massage', 'Make UP', 'Nail Art', 'Pre Bridal', 'Threading'
    ];

    if (submitted) {
        return (
            <div className="container" style={{ paddingTop: '200px', textAlign: 'center', height: '100vh' }}>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <CheckCircle size={80} color="var(--gold)" style={{ margin: '0 auto 30px' }} />
                    <h1 className="hero-title">Reservation <span className="text-gold">Confirmed</span></h1>
                    <p style={{ color: 'var(--gray)', fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto 40px' }}>
                        Thank you, {formData.name}. Our concierge will contact you shortly to finalize your <span className="text-gold">{formData.service}</span> experience.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn-premium">New Reservation</button>
                </motion.div>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: '150px', paddingBottom: '100px' }}>
            <div className="container">
                <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span className="section-tag">Secure Your Session</span>
                    <h1 className="hero-title">Private <span className="text-outline">Reservation</span></h1>
                </header>

                <div className="grid-2" style={{ gap: '100px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title">The Parlour <br /><span className="text-gold">Experience</span></h2>
                        <p style={{ color: 'var(--gray)', marginBottom: '30px' }}>
                            Your reservation is the first step into a world of curated beauty. Due to high demand, we recommend booking at least 48 hours in advance.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ color: 'var(--gold)' }}><Clock size={20} /></div>
                                <span>Mon - Sat: 10:00 AM - 08:00 PM</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ color: 'var(--gold)' }}><User size={20} /></div>
                                <span>Personalized One-on-One Concierge</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="expertise-card"
                        style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
                    >
                        <div className="input-group">
                            <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--gold)' }}>Full Name</label>
                            <input
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                placeholder="E.g. Alexander Pierce"
                                style={{ width: '100%', padding: '15px', background: 'var(--dark)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none' }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div className="input-group">
                                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--gold)' }}>Email</label>
                                <input
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="alex@example.com"
                                    style={{ width: '100%', padding: '15px', background: 'var(--dark)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none' }}
                                />
                            </div>
                            <div className="input-group">
                                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--gold)' }}>Phone</label>
                                <input
                                    required
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    style={{ width: '100%', padding: '15px', background: 'var(--dark)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none' }}
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--gold)' }}>Selected Ritual</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '15px', background: 'var(--dark)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none' }}
                            >
                                {availableServices.map(s => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" className="btn-premium">Confirm {formData.service} Reservation</button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Booking;
