import React from 'react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => (
  <section style={{ padding: '4rem 2rem', background: 'linear-gradient(90deg, #ff9800 0%, #009688 100%)', color: 'white', textAlign: 'center' }}>
    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
      Discover India's <span style={{ color: '#ffe082' }}>Hidden Gems</span>
    </h1>
    <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
      AI-powered travel planning for devotional pilgrimages and leisure getaways.<br/>
      Find perfect destinations based on season and your unique interests.
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
      <button onClick={() => setActiveSection('ai-planner')} style={{ padding: '1rem 2rem', fontSize: '1.2rem', borderRadius: '2rem', background: 'white', color: '#ff9800', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Start Planning</button>
      <button onClick={() => setActiveSection('hotels')} style={{ padding: '1rem 2rem', fontSize: '1.2rem', borderRadius: '2rem', background: 'transparent', color: 'white', border: '2px solid white', fontWeight: 'bold', cursor: 'pointer' }}>Find Hotels</button>
    </div>
  </section>
);

export default Hero; 