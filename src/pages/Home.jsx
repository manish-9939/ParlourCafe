import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import '../index.css';

const categories = [
    { id: 'packages', name: 'Packages', img: '/packages.png' },
    { id: 'facial', name: 'Facial', img: '/facial.png' },
    { id: 'cleanup', name: 'Clean up', img: '/cleanup.png' },
    { id: 'bleach', name: 'Bleach', img: '/bleach.png' },
    { id: 'detan', name: 'De-Tan', img: '/detan.png' },
    { id: 'waxing', name: 'Waxing', img: '/waxing.png' },
    { id: 'manipedi', name: 'Mani & Pedi', img: '/manipedi.png' },
    { id: 'haircare', name: 'Hair Care', img: '/haircare.png' },
    { id: 'bodypolish', name: 'Body Polish', img: '/bodypolish.png' },
    { id: 'massage', name: 'Massage', img: '/massage.png' },
    { id: 'makeup', name: 'Make UP', img: '/makeup.png' },
    { id: 'nailart', name: 'Nail Art', img: '/nail_art.png' },
    { id: 'prebridal', name: 'Pre Bridal', img: '/prebridal.png' },
    { id: 'threading', name: 'Threading', img: '/threading.png' }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: { type: 'spring', damping: 15, stiffness: 100 }
    }
};

const Home = () => {
    return (
        <div className="home-boutique">
            {/* KINETIC ELITE HERO */}
            <section className="hero-kinetic">
                <div className="hero-kinetic-left">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <div className="hero-badge">Professional Precision Aesthetics</div>
                        <h1>
                            REDESIGNING <br />
                            <span className="text-outline">YOUR VISUAL</span> <br />
                            <span className="text-gold">DNA</span>
                        </h1>
                        <p>
                            Experience the intersection of artisan mastery and robotic precision.
                            Our creative atelier transforms regular routines into high-end rituals.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <Link to="/booking" className="btn-premium" style={{ gap: '12px', padding: '18px 45px' }}>
                                Secure Appointment <ArrowRight size={20} />
                            </Link>
                            <Link to="/ai-stylist" className="btn-premium" style={{ background: 'transparent', border: '1px solid var(--white)', color: 'white', gap: '10px' }}>
                                <Sparkles size={18} /> AI Analysis
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <div className="hero-kinetic-right">
                    <motion.div
                        className="hero-image-frame"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.8 }}
                    >
                        <img src="/mak.jpg" alt="Luxury Salon" />

                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                position: 'absolute',
                                bottom: '15%',
                                right: '10%',
                                background: 'rgba(8, 8, 8, 0.8)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid var(--gold)',
                                padding: '30px',
                                zIndex: 10
                            }}
                        >
                            <Play color="var(--gold)" fill="var(--gold)" size={24} style={{ marginBottom: '15px' }} />
                            <h4 style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>The Atelier Vision</h4>
                            <p style={{ color: 'var(--gray)', fontSize: '0.7rem' }}>Preview Session 2026</p>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="hero-scroll-hint" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                    <span></span>
                    EXPLORE SERVICES
                </div>
            </section>

            <div className="marquee-line">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{ display: 'flex', gap: '100px', fontSize: '1.2rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '5px', opacity: 0.15 }}
                >
                    {[...Array(5)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span>Artisan Hair</span>
                            <span>Elite Aesthetics</span>
                            <span>AI Styling</span>
                            <span>Bridal Mastery</span>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>

            {/* THE DISCOVERY PORTAL - FIXED IMAGES & UNIQUE LINKS */}
            <section className="discovery-container">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <span className="section-tag">Aesthetic Domains</span>
                        <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Customized <span className="text-gold">Rituals</span></h2>
                        <p style={{ color: 'var(--gray)' }}>Every image is a portal to a specialized world of beauty. Click to explore details.</p>
                    </div>

                    <motion.div
                        className="grid-parent"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {categories.map((cat) => (
                            <motion.div key={cat.id} variants={itemVariants}>
                                <Link
                                    to={`/service/${cat.id}`}
                                    className="category-card"
                                >
                                    <div className="circle-wrapper">
                                        <img src={cat.img} alt={cat.name} loading="lazy" />
                                    </div>
                                    <span>{cat.name}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ADDITIONAL SECTION TO SHOW DEPTH */}
            <section style={{ padding: '120px 0', background: 'var(--dark)' }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: '100px', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <img src="/studio.jpg" alt="Studio" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', border: '1px solid var(--gold)', zIndex: -1 }}></div>
                        </div>
                        <div>
                            <span className="section-tag">Our Environment</span>
                            <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>Sanctuary of <span className="text-gold">Excellence</span></h2>
                            <p style={{ color: 'var(--gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                We have curated every inch of our atelier to provide an atmosphere of deep focus and luxury. From medical-grade air filtration to ergonomic designer seating, your comfort is pre-engineered.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
