import React, { useState } from 'react';

const HotelBooking: React.FC = () => {
  const [destination, setDestination] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching hotels for: ${destination}`);
  };

  return (
    <section style={{ padding: '2rem', background: '#e8f5e9' }}>
      <h2>Hotel Booking</h2>
      <form onSubmit={handleSearch} style={{ margin: '1rem 0', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <input
          type="text"
          value={destination}
          onChange={e => setDestination(e.target.value)}
          placeholder="Enter destination..."
          style={{ padding: '0.5rem 1rem', borderRadius: '1rem', border: '1px solid #ccc', minWidth: '200px' }}
          required
        />
        <button type="submit" style={{ padding: '0.5rem 1.5rem', borderRadius: '1rem', background: '#009688', color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
          Search Hotels
        </button>
      </form>
      <p>Find and book the best hotels for your trip.</p>
    </section>
  );
};

export default HotelBooking; 