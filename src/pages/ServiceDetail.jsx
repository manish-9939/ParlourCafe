import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import '../index.css';

const serviceData = {
    'packages': {
        name: 'Elite Bridal Packages',
        img: '/packages.png',
        desc: 'Our comprehensive bridal collection is designed for the modern bride who demands perfection. This includes advanced skin prep, luxury makeup, and architectural hair styling over multiple sessions.',
        duration: '4-6 Sessions',
        price: 'Starts from ₹25,000'
    },
    'facial': {
        name: 'Gold Radiance Facial',
        img: '/facial.png',
        desc: 'A multi-step ritual using 24k gold extracts to rejuvenate skin cells and provide an instant, long-lasting glow. Perfect for high-stakes events.',
        duration: '90 Mins',
        price: '₹5,500'
    },
    'cleanup': {
        name: 'Organic Pore Cleanup',
        img: '/cleanup.png',
        desc: 'Deep metabolic cleaning using botanical extracts and steam to remove pollutants and restore the natural pH balance of your skin.',
        duration: '45 Mins',
        price: '₹1,800'
    },
    'bleach': {
        name: 'Creamy Gold Bleach',
        img: '/bleach.png',
        desc: 'Gentle yet effective skin lightening treatment that matches your hair to your skin tone for a seamless, brightened look.',
        duration: '30 Mins',
        price: '₹800'
    },
    'detan': {
        name: 'Cooling De-Tan Ritual',
        img: '/detan.png',
        desc: 'Removes tan caused by UV exposure using a signature blend of cooling masks and refreshing minerals.',
        duration: '40 Mins',
        price: '₹1,200'
    },
    'waxing': {
        name: 'Silk Touch Waxing',
        img: '/waxing.png',
        desc: 'Experience virtually painless hair removal with our premium honey-gold wax that leaves skin feeling like silk.',
        duration: 'Variable',
        price: 'Starts from ₹500'
    },
    'manipedi': {
        name: 'Artisan Mani & Pedi',
        img: '/manipedi.png',
        desc: 'Luxury hand and foot spas featuring flower petal soaks, mineral scrubs, and hydrating oils for total relaxation.',
        duration: '75 Mins',
        price: '₹2,500'
    },
    'haircare': {
        name: 'Intensive Hair Restoration',
        img: '/haircare.png',
        desc: 'A moisture-locking therapy for damaged hair, using steam and designer masks to bring back mirror-like shine.',
        duration: '60 Mins',
        price: '₹3,000'
    },
    'bodypolish': {
        name: 'Crystal Body Polishing',
        img: '/bodypolish.png',
        desc: 'Full body exfoliation using fine gold crystals and aromatic oils to reveal soft, glowing skin from head to toe.',
        duration: '120 Mins',
        price: '₹7,500'
    },
    'massage': {
        name: 'Deep Tissue Massage',
        img: '/massage.png',
        desc: 'A therapeutic session focused on muscle recovery and stress relief using rhythmic strokes and heated oils.',
        duration: '60/90 Mins',
        price: 'Starts from ₹3,500'
    },
    'makeup': {
        name: 'Designer Makeup Artistry',
        img: '/makeup.png',
        desc: 'Professional makeup for weddings, parties, or corporate events using high-end international brands for a flawless finish.',
        duration: '90 Mins',
        price: 'Starts from ₹4,500'
    },
    'nailart': {
        name: 'Bespoke Nail Architecture',
        img: '/nail_art.png',
        desc: 'From gel extensions to 3D art, our nail technicians create miniature masterpieces on your fingertips.',
        duration: '60-120 Mins',
        price: 'Starts from ₹1,500'
    },
    'prebridal': {
        name: 'The Pre-Bridal GlowUp',
        img: '/prebridal.png',
        desc: 'A 7-day intensive regime including skin, hair, and body treatments to ensure you are radiant for your big day.',
        duration: '7 Days',
        price: '₹18,000'
    },
    'threading': {
        name: 'Precision Threading',
        img: '/threading.png',
        desc: 'Define your facial architecture with expert eyebrow shaping and full-face threading services.',
        duration: '15-30 Mins',
        price: 'Starts from ₹100'
    }
};

const ServiceDetail = () => {
    const { id } = useParams();
    const service = serviceData[id];

    if (!service) {
        return (
            <div className="container" style={{ paddingTop: '200px', textAlign: 'center', height: '100vh' }}>
                <h1 className="hero-title">Service Not Found</h1>
                <Link to="/" className="btn-premium" style={{ marginTop: '30px' }}>Return Home</Link>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: '150px', paddingBottom: '100px', background: 'var(--dark)' }}>
            <div className="container">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--gold)', textDecoration: 'none', marginBottom: '40px', fontSize: '0.9rem', fontWeight: '600' }}>
                    <ArrowLeft size={18} /> BACK TO DISCOVERY
                </Link>

                <div className="grid-2" style={{ gap: '80px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-tag">Premium Category</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '30px' }}>{service.name}</h1>
                        <p style={{ color: 'var(--gray)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '40px' }}>
                            {service.desc}
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '50px' }}>
                            <div style={{ padding: '20px', background: 'var(--dark-soft)', border: '1px solid var(--glass-border)' }}>
                                <div style={{ color: 'var(--gold)', marginBottom: '10px' }}><Clock size={24} /></div>
                                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--gray)' }}>Duration</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>{service.duration}</div>
                            </div>
                            <div style={{ padding: '20px', background: 'var(--dark-soft)', border: '1px solid var(--glass-border)' }}>
                                <div style={{ color: 'var(--gold)', marginBottom: '10px' }}><Star size={24} /></div>
                                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--gray)' }}>Investment</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>{service.price}</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--gray)', marginBottom: '40px' }}>
                            <ShieldCheck size={20} color="var(--gold)" />
                            <span>Hygiene Certified Session</span>
                        </div>

                        <Link to={`/booking?service=${encodeURIComponent(service.name)}`} className="btn-premium" style={{ padding: '20px 60px', fontSize: '1.1rem' }}>
                            RESERVE THIS SESSION <ArrowRight size={20} />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{ width: '100%', height: '600px', overflow: 'hidden' }}>
                            <img src={service.img} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ position: 'absolute', inset: '-15px', border: '1px solid var(--gold)', zIndex: -1 }}></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
