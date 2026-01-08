import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Scissors, Smile, Camera, ChevronRight, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../index.css';

const AIStylist = () => {
    const [step, setStep] = useState(0);
    const [selections, setSelections] = useState({ face: '', hairType: '' });
    const [loading, setLoading] = useState(false);
    const [recommendation, setRecommendation] = useState(null);

    const faceShapes = ['Round', 'Oval', 'Square', 'Heart'];
    const hairTypes = ['Straight', 'Wavy', 'Curly', 'Coily'];

    const handleSelect = (key, value) => {
        setSelections({ ...selections, [key]: value });
    };

    const generateStyle = () => {
        setLoading(true);
        setStep(2);
        setTimeout(() => {
            let style = "";
            let desc = "";
            if (selections.face === 'Round') {
                style = "Architectural Pixie";
                desc = "To add structure and verticality, our AI recommends an Architectural Pixie with volume at the crown. This elegantly balances circular profiles.";
            } else if (selections.face === 'Square') {
                style = "Multi-Tonal Soft Layers";
                desc = "We suggest soft, fluid layers to diffuse strong jawlines. The addition of multi-tonal highlights creates a dreamlike, sophisticated motion.";
            } else if (selections.face === 'Oval') {
                style = "Sharp Parisian Bob";
                desc = "Perfectly symmetrical profiles are best showcased with a blunt, chin-length bob that emphasizes the eyes and cheekbones.";
            } else {
                style = "Dimensional Waves";
                desc = "Focusing volume around the jawline creates a harmonious balance for heart-shaped profiles, blending softness with elite precision.";
            }

            setRecommendation({ style, desc });
            setLoading(false);
            setStep(3);
        }, 3000);
    };

    return (
        <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '100vh', background: 'var(--dark)' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <span style={{ color: 'var(--gold)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Intelligent Aesthetics</span>
                        <h1 style={{ fontSize: '3.5rem', marginTop: '10px' }}>AI <span className="text-outline">STYLING</span></h1>
                    </motion.div>
                </header>

                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="s1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="business-card"
                            style={{ padding: '60px', borderRadius: '0', border: '1px solid var(--glass-border)' }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <Smile size={48} color="var(--gold)" style={{ marginBottom: '20px' }} />
                                <h2 style={{ fontSize: '2rem' }}>Define Face Shape</h2>
                                <p style={{ color: 'var(--gray)', marginTop: '10px' }}>Our vision engine maps your unique geometry for a perfect fit.</p>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                                {faceShapes.map(s => (
                                    <button
                                        key={s}
                                        onClick={() => handleSelect('face', s)}
                                        style={{
                                            padding: '20px',
                                            background: selections.face === s ? 'var(--gold)' : 'var(--dark)',
                                            color: selections.face === s ? 'var(--dark)' : 'var(--white)',
                                            border: '1px solid var(--glass-border)',
                                            cursor: 'pointer',
                                            fontWeight: '600',
                                            transition: 'var(--transition)'
                                        }}
                                    >
                                        {s.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                            <button
                                disabled={!selections.face}
                                onClick={() => setStep(1)}
                                className="btn-premium"
                                style={{ width: '100%', marginTop: '40px', opacity: selections.face ? 1 : 0.5 }}
                            >
                                Continue To Texture <ChevronRight size={18} />
                            </button>
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.div
                            key="s2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="business-card"
                            style={{ padding: '60px' }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <Scissors size={48} color="var(--gold)" style={{ marginBottom: '20px' }} />
                                <h2 style={{ fontSize: '2rem' }}>Hair Texture</h2>
                                <p style={{ color: 'var(--gray)', marginTop: '10px' }}>Selecting the appropriate ritual based on follicle resistance.</p>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                                {hairTypes.map(s => (
                                    <button
                                        key={s}
                                        onClick={() => handleSelect('hairType', s)}
                                        style={{
                                            padding: '20px',
                                            background: selections.hairType === s ? 'var(--gold)' : 'var(--dark)',
                                            color: selections.hairType === s ? 'var(--dark)' : 'var(--white)',
                                            border: '1px solid var(--glass-border)',
                                            cursor: 'pointer',
                                            fontWeight: '600',
                                            transition: 'var(--transition)'
                                        }}
                                    >
                                        {s.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '15px', marginTop: '40px' }}>
                                <button onClick={() => setStep(0)} style={{ border: '1px solid var(--glass-border)', background: 'transparent', color: 'white', padding: '15px 25px', cursor: 'pointer' }}>Back</button>
                                <button
                                    className="btn-premium"
                                    style={{ flex: 1, opacity: selections.hairType ? 1 : 0.5 }}
                                    onClick={generateStyle}
                                >
                                    Generate Bespoke Ritual <Sparkles size={18} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div key="s3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '100px 0' }}>
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
                                <Camera size={64} color="var(--gold)" />
                            </motion.div>
                            <h2 style={{ letterSpacing: '8px', marginTop: '30px' }}>ANALYZING...</h2>
                        </motion.div>
                    )}

                    {step === 3 && recommendation && (
                        <motion.div key="s4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="business-card" style={{ textAlign: 'center', padding: '60px' }}>
                            <Sparkles size={64} color="var(--gold)" style={{ marginBottom: '30px' }} />
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--gold)' }}>{recommendation.style}</h2>
                            <p style={{ color: 'var(--gray)', fontSize: '1.2rem', marginTop: '20px', lineHeight: '1.8' }}>{recommendation.desc}</p>
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px' }}>
                                <Link
                                    to={`/booking?service=${encodeURIComponent(recommendation.style)}`}
                                    className="btn-premium"
                                >
                                    Book This Signature Look
                                </Link>
                                <button onClick={() => setStep(0)} style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'white', padding: '12px 25px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <RotateCcw size={16} /> Reset
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AIStylist;
