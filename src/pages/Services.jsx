import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../index.css';

const serviceCategories = [
    {
        category: "The Art of Face",
        tag: "Aesthetic Rituals",
        services: [
            { title: "Bridal Couture", price: "₹15,000+", desc: "The ultimate metabolic transformation for your peak moments." },
            { title: "Executive Glow", price: "₹4,500", desc: "Long-lasting, camera-ready aesthetic for impact events." },
            { title: "Soft Muse", price: "₹2,500", desc: "Natural enhancement for minimalist elegance." }
        ],
        img: "/beauty.jpg"
    },
    {
        category: "Structural Art",
        tag: "Hair Engineering",
        services: [
            { title: "Elite Sculpt", price: "₹1,200", desc: "Precision restructuring based on individual facial symmetry." },
            { title: "Keratin Restoration", price: "₹4,000+", desc: "Deep fiber reconstruction for high-gloss durability." },
            { title: "Color Mapping", price: "₹3,500+", desc: "Bespoke multidimensional shades for architectural depth." }
        ],
        img: "/hair.jpg"
    }
];

const Services = () => {
    return (
        <div className="catalogue-page" style={{ paddingTop: '100px', background: 'var(--dark)' }}>
            {/* Header */}
            <header style={{ padding: '100px 0 60px', textAlign: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="section-tag">Signature Catalogue</span>
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '20px' }}>EXECUTIVE <span className="text-outline">RITUALS</span></h1>
                        <p style={{ color: 'var(--gray)', maxWidth: '600px', margin: '0 auto' }}>Explore our curated collection of high-performance beauty solutions.</p>
                    </motion.div>
                </div>
            </header>

            {/* Categorized Services */}
            {serviceCategories.map((cat, idx) => (
                <section key={idx} style={{ padding: '100px 0', background: idx % 2 === 0 ? 'var(--dark-soft)' : 'var(--dark)', borderTop: '1px solid var(--glass-border)' }}>
                    <div className="container">
                        <div className="grid-2" style={{ gap: '80px', flexDirection: idx % 2 !== 0 ? 'row-reverse' : 'row', alignItems: 'center' }}>
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 1 }}
                            >
                                <span className="section-tag">{cat.tag}</span>
                                <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>{cat.category}</h2>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                    {cat.services.map((ser, sIdx) => (
                                        <div key={sIdx} style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '20px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                                <h3 style={{ fontSize: '1.2rem', color: 'var(--white)' }}>{ser.title}</h3>
                                                <span style={{ color: 'var(--gold)', fontWeight: '700' }}>{ser.price}</span>
                                            </div>
                                            <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: '1.6' }}>{ser.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <Link to={`/booking?service=${encodeURIComponent(cat.category)}`} className="btn-premium" style={{ marginTop: '40px' }}>
                                    Reserve Experience <ArrowRight size={18} />
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2 }}
                                style={{ height: '600px', width: '100%', position: 'relative' }}
                            >
                                <img src={cat.img} alt={cat.category} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', inset: '0', border: '1px solid var(--gold)', transform: 'translate(20px, 20px)', zIndex: -1 }}></div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Final Contact Strategy */}
            <section style={{ padding: '150px 0', textAlign: 'center', background: 'var(--dark)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Tailored Excellence</h2>
                    <p style={{ color: 'var(--gray)', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px' }}>Our consultants are available for complex aesthetic architecture planning.</p>
                    <Link to="/booking" className="btn-premium btn-secondary" style={{ padding: '20px 50px' }}>Contact Specialist</Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
