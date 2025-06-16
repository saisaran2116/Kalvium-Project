import React from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'ai-planner', label: 'AI Planner' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'hotels', label: 'Hotels' },
  { id: 'login', label: 'Login' },
  { id: 'signup', label: 'Sign Up' },
];

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  return (
    <header style={{ padding: '1rem', background: '#f5f5f5' }}>
      <h1>Trip Sculptor</h1>
      <nav style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            style={{
              padding: '0.5rem 1.2rem',
              borderRadius: '1rem',
              border: 'none',
              background: activeSection === item.id ? '#ff9800' : '#fff',
              color: activeSection === item.id ? 'white' : '#333',
              fontWeight: activeSection === item.id ? 'bold' : 'normal',
              cursor: 'pointer',
              boxShadow: activeSection === item.id ? '0 2px 8px #ff980033' : 'none',
              transition: 'all 0.2s',
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header; 