import React, { useState } from 'react';
import { modules } from '../data/content';
import type { Module } from '../data/content';

export const Modules: React.FC = () => {
    const [selectedModule, setSelectedModule] = useState<Module | null>(null);

    const categories = Array.from(new Set(modules.map(m => m.category)));

    return (
        <section id="modulos" style={{ padding: '100px 0', position: 'relative' }}>
            <div className="container">
                <h2 className="section-title">Módulos de Aprendizado</h2>

                {categories.map(category => (
                    <div key={category} style={{ marginBottom: '3rem' }}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', borderLeft: '4px solid var(--color-secondary)', paddingLeft: '1rem' }}>
                            {category}
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '2rem'
                        }}>
                            {modules.filter(m => m.category === category).map(module => (
                                <div
                                    key={module.id}
                                    className="glass-panel"
                                    style={{ padding: '2rem', cursor: 'pointer', transition: 'transform 0.3s' }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    onClick={() => setSelectedModule(module)}
                                >
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{module.icon}</div>
                                    <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{module.title}</h4>
                                    <p style={{ color: 'var(--color-text-muted)' }}>{module.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {selectedModule && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                        background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000
                    }} onClick={() => setSelectedModule(null)}>
                        <div
                            className="glass-panel"
                            style={{ width: '90%', maxWidth: '600px', padding: '3rem', position: 'relative', background: '#121212' }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedModule(null)}
                                style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
                            >
                                ✕
                            </button>
                            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{selectedModule.title}</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Bem-vindo ao módulo de <strong>{selectedModule.title}</strong>.
                                Aqui você aprenderá os conceitos fundamentais e avançados para dominar esta tecnologia.
                            </p>

                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px' }}>
                                <h4 style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }}>Instruções:</h4>
                                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                    <li>Assista às aulas introdutórias.</li>
                                    <li>Pratique os exercícios no terminal/editor.</li>
                                    <li>Participe do fórum para tirar dúvidas.</li>
                                    <li>Complete o projeto final para obter o certificado.</li>
                                </ul>
                            </div>

                            <button className="btn-primary" style={{ marginTop: '2rem', width: '100%' }}>
                                Acessar Conteúdo
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
