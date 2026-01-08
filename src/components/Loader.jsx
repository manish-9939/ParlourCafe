import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: '#080808',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    letterSpacing: '10px',
                    color: 'var(--gold)',
                    fontFamily: 'Playfair Display, serif',
                    marginBottom: '30px',
                    textTransform: 'uppercase'
                }}
            >
                PARLOUR CAFÉ
            </motion.div>

            <div style={{ width: '200px', height: '1px', background: 'var(--glass-border)', position: 'relative', overflow: 'hidden' }}>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', inset: 0, background: 'var(--gold)' }}
                />
            </div>

            <span style={{ marginTop: '20px', fontSize: '0.6rem', letterSpacing: '4px', color: '#444', textTransform: 'uppercase' }}>
                Initializing Excellence
            </span>
        </div>
    );
};

export default Loader;
