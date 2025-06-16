import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AIPlanner from './components/AIPlanner';
import HotelBooking from './components/HotelBooking';
import Login from './components/Login';
import SignUp from './components/SignUp';
import DestinationFinder from './components/DestinationFinder';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50 font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && (
        <>
          <Hero setActiveSection={setActiveSection} />
          <section id="features" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Trip Sculptor?</h2>
              <p className="text-lg text-gray-700 mb-8">Smart planning, curated experiences, and seamless booking for your next adventure.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-200">
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">AI-Powered Suggestions</h3>
                  <p className="text-gray-600 mb-4">Get personalized trip ideas based on your interests and season.</p>
                </div>
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-200">
                  <h3 className="text-xl font-semibold text-teal-600 mb-2">Handpicked Destinations</h3>
                  <p className="text-gray-600 mb-4">Explore the best places, hotels, and experiences in India.</p>
                </div>
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-200">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Easy Booking</h3>
                  <p className="text-gray-600 mb-4">Book hotels and plan your trip in just a few clicks.</p>
                </div>
              </div>
            </div>
          </section>
          <section id="how-it-works" className="py-16 bg-gradient-to-br from-orange-50 via-white to-teal-50">
            <div className="max-w-5xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg">
                  <span className="text-4xl mb-4">📝</span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Plan</h3>
                  <p className="text-gray-600">Tell us your preferences and travel dates.</p>
                </div>
                <div className="flex flex-col items-center bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg">
                  <span className="text-4xl mb-4">🎨</span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Customize</h3>
                  <p className="text-gray-600">Get personalized itineraries and adjust as you like.</p>
                </div>
                <div className="flex flex-col items-center bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg">
                  <span className="text-4xl mb-4">🧳</span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Book</h3>
                  <p className="text-gray-600">Book hotels and experiences in one click.</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      
      {activeSection === 'ai-planner' && <AIPlanner />}
      {activeSection === 'hotels' && <HotelBooking />}
      {activeSection === 'login' && <Login setActiveSection={setActiveSection} />}
      {activeSection === 'signup' && <SignUp setActiveSection={setActiveSection} />}
      {activeSection === 'adventure-planner' && <DestinationFinder />}
    </div>
  );
}

export default App;