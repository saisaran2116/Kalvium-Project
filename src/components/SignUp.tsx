import React from 'react';

interface SignUpProps {
  setActiveSection: (section: string) => void;
}

const SignUp: React.FC<SignUpProps> = ({ setActiveSection }) => (
  <section style={{ padding: '2rem', background: '#fce4ec' }}>
    <h2>Sign Up</h2>
    <button onClick={() => setActiveSection('home')}>Back to Home</button>
  </section>
);

export default SignUp; 