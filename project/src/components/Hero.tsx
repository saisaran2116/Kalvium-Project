import React from 'react';
import { ArrowRight, Calendar, Heart, MapPin } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFA726 0%, #FFA726 60%, #009688 100%)' }}>
      {/* Soft travel-themed background illustration */}
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Travel background" className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none select-none" loading="lazy" />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Plan Your Dream Trip Instantly
          </h1>
          <p className="text-lg md:text-2xl text-orange-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
            AI-powered travel planning for smarter, faster bookings. Discover, customize, and book your next adventure in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveSection('ai-planner')}
              className="px-8 py-3 rounded-full text-lg md:text-xl font-semibold bg-gradient-to-r from-orange-500 to-teal-600 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
            >
              Start Planning
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <Calendar className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Seasonal Recommendations</h3>
              <p className="text-orange-100">Perfect destinations for every month and weather</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <Heart className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Devotional & Leisure</h3>
              <p className="text-orange-100">Spiritual journeys and relaxing getaways</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
              <MapPin className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Smart Planning</h3>
              <p className="text-orange-100">AI-powered recommendations within your preferences</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;