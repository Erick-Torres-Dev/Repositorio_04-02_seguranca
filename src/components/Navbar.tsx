import React from 'react';

export const Navbar: React.FC = () => {

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            backdropFilter: 'blur(10px)',
            background: 'rgba(5, 5, 5, 0.8)',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
                <h1 className="neon-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>TECH<span style={{ color: '#fff' }}>HUB</span></h1>

                <div style={{ display: 'flex', gap: '2rem' }} className="desktop-menu">
                    {['Início', 'Módulos', 'Curiosidades', 'Fórum'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace('é', 'e').replace('ú', 'u')}`} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: '0.3s' }} className="nav-link">
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};
