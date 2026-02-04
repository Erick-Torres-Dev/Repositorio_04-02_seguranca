import React from 'react';
import { forumTopics } from '../data/content';

export const Forum: React.FC = () => {
    return (
        <section id="forum" style={{ padding: '100px 0' }}>
            <div className="container">
                <h2 className="section-title">Comunidade & Fórum</h2>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem' }}>Tópicos Recentes</h3>
                        <button className="btn-primary" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>+ Novo Tópico</button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {forumTopics.map(topic => (
                            <div key={topic.id} style={{
                                background: 'rgba(255,255,255,0.03)',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '1rem'
                            }}>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', cursor: 'pointer', color: 'var(--color-primary)' }}>{topic.title}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Por: {topic.author}</p>
                                </div>
                                <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                    <span>💬 {topic.replies} respostas</span>
                                    <span>👁️ {topic.views} views</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
