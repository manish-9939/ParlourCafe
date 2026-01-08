import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'radial-gradient(circle at center, #121212 0%, #080808 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ textAlign: 'center' }}
            >
                <motion.div
                    animate={{
                        opacity: [0.4, 1, 0.4],
                        scale: [0.98, 1, 0.98]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        fontWeight: '700',
                        letterSpacing: '15px',
                        color: 'var(--gold)',
                        fontFamily: 'Playfair Display, serif',
                        marginBottom: '10px',
                        textTransform: 'uppercase',
                        textShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
                    }}
                >
                    PARLOUR CAFÉ
                </motion.div>

                <div style={{
                    fontSize: '0.7rem',
                    letterSpacing: '6px',
                    color: 'rgba(255,255,255,0.4)',
                    textTransform: 'uppercase',
                    marginBottom: '40px'
                }}>
                    The Art of Aesthetic Precision
                </div>
            </motion.div>

            <div style={{
                width: '240px',
                height: '2px',
                background: 'rgba(212, 175, 55, 0.1)',
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden'
            }}>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                        boxShadow: '0 0 15px var(--gold)'
                    }}
                />
            </div>

            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{
                    marginTop: '30px',
                    fontSize: '0.6rem',
                    letterSpacing: '3px',
                    color: '#666',
                    textTransform: 'uppercase',
                    fontWeight: '500'
                }}
            >
                Initializing Atelier Experience
            </motion.span>
        </div>
    );
};

export default Loader;
