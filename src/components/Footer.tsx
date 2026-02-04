import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer style={{
            background: '#000',
            padding: '50px 0',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center'
        }}>
            <div className="container">
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                    &copy; 2026 TechHub. Todos os direitos reservados.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    {['Instagram', 'Twitter', 'GitHub', 'LinkedIn'].map(social => (
                        <a key={social} href="#" style={{ color: '#fff', textDecoration: 'none', transition: '0.3s' }} className="nav-link">
                            {social}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
