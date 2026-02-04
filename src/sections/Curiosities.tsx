import React from 'react';
import { curiosities } from '../data/content';

export const Curiosities: React.FC = () => {
    return (
        <section id="curiosidades" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.02)' }}>
            <div className="container">
                <h2 className="section-title">Você Sabia?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {curiosities.map((fact, index) => (
                        <div key={index} className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--color-primary)' }}>
                            <span style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.1)', fontWeight: 'bold' }}>{index + 1}</span>
                            <p style={{ fontSize: '1.1rem', marginTop: '-1rem' }}>{fact}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
