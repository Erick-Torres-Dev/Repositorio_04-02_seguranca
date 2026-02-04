import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section id="inicio" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'radial-gradient(circle at center, rgba(0, 242, 234, 0.1) 0%, rgba(5,5,5,1) 70%)',
            paddingTop: '80px'
        }}>
            <div className="container">
                <h2 style={{
                    fontSize: '4rem',
                    marginBottom: '1rem',
                    lineHeight: 1.1
                }}>
                    O Futuro da <br />
                    <span className="neon-text">Tecnologia</span> Começa Aqui
                </h2>
                <p style={{
                    color: 'var(--color-text-muted)',
                    fontSize: '1.2rem',
                    maxWidth: '600px',
                    margin: '0 auto 2rem auto'
                }}>
                    Explore módulos completos de desenvolvimento, descubra curiosidades fascinantes e conecte-se com a comunidade.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button className="btn-primary" onClick={() => document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' })}>
                        Começar Agora
                    </button>
                </div>
            </div>
        </section>
    );
};
