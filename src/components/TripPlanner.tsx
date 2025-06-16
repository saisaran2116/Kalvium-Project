import React, { useState } from 'react';
import axios from 'axios';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const tripTypes = [
  { value: 'devotional', label: 'Devotional' },
  { value: 'leisure', label: 'Leisure & Chill' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'cultural', label: 'Cultural' }
];

interface DestinationCardData {
  title: string;
  description: string;
  top_attractions: string[];
  best_time_to_visit: string;
  local_tip: string;
}

const TripPlanner: React.FC = () => {
  const [form, setForm] = useState({ month: '', tripType: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cards, setCards] = useState<DestinationCardData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setCards([]);
    setLoading(true);
    try {
      console.log('Submitting to Gemini:', { month: form.month, tripType: form.tripType });
      const response = await axios.post('http://localhost:5000/api/destinations/generate-cards', {
        month: form.month,
        tripType: form.tripType
      });
      console.log('Gemini response:', response);
      setCards(response.data);
    } catch (err) {
      setError('Failed to generate destinations. Please try again.');
      console.error('Gemini error:', err);
      if (err.response) {
        console.error('Gemini error response:', err.response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ padding: '2rem', background: '#fffde7' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Plan Your Perfect Indian Adventure</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
        <select name="month" value={form.month} onChange={handleChange} style={{ padding: '0.5rem', borderRadius: '0.5rem' }} required>
          <option value="">Select Month</option>
          {months.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <select name="tripType" value={form.tripType} onChange={handleChange} style={{ padding: '0.5rem', borderRadius: '0.5rem' }} required>
          <option value="">Select Trip Type</option>
          {tripTypes.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
        <button type="submit" style={{ padding: '0.7rem 1.5rem', borderRadius: '1rem', background: '#ff9800', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Find Destinations</button>
      </form>
      {loading && <div style={{ marginTop: '2rem', textAlign: 'center' }}>Generating destinations...</div>}
      {error && <div style={{ marginTop: '2rem', color: 'red', textAlign: 'center' }}>{error}</div>}
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cards.map((card, idx) => (
          <div key={idx} style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px #0001', padding: '1.5rem', width: '320px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{card.title}</h3>
            <p style={{ color: '#555', marginBottom: '0.7rem' }}>{card.description}</p>
            <div style={{ marginBottom: '0.7rem' }}>
              <strong>Top Attractions:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                {card.top_attractions.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
            <div style={{ marginBottom: '0.7rem' }}><strong>Best Time to Visit:</strong> {card.best_time_to_visit}</div>
            <div><strong>Local Tip:</strong> {card.local_tip}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TripPlanner; 