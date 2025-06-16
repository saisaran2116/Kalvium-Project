import React from 'react';

interface LoginProps {
  setActiveSection: (section: string) => void;
}

const Login: React.FC<LoginProps> = ({ setActiveSection }) => (
  <section style={{ padding: '2rem', background: '#fff3e0' }}>
    <h2>Login</h2>
    <button onClick={() => setActiveSection('home')}>Back to Home</button>
  </section>
);

export default Login; 