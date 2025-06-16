import React, { useState } from 'react';
import { Search, Loader2, TrendingUp, Sparkles } from 'lucide-react';

const destinations = [
  { name: 'Goa', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80', category: 'Beach' },
  { name: 'Manali', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', category: 'Mountains' },
  { name: 'Sundarbans', img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80', category: 'Nature' },
  { name: 'Varanasi', img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80', category: 'Culture' },
  { name: 'Mumbai', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'Urban' },
  { name: 'Jaipur', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80', category: 'Culture' },
  { name: 'Rishikesh', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80', category: 'Mountains' },
  { name: 'Andaman', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', category: 'Beach' },
];

const trendingDestinations = ['Goa', 'Manali', 'Rishikesh', 'Varanasi'];

const popularDestinations = [
  'Goa', 'Manali', 'Jaipur', 'Mumbai', 'Varanasi', 'Rishikesh', 'Andaman', 'Sundarbans', 'Delhi', 'Kerala', 'Udaipur', 'Agra', 'Kolkata', 'Chennai', 'Bangalore', 'Hyderabad', 'Pune', 'Shimla', 'Darjeeling', 'Ooty'
];

const DestinationFinder: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [destinationInput, setDestinationInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate search delay
    setTimeout(() => {
      setIsLoading(false);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }, 1500);
  };

  return (
    <main className="font-sans bg-gradient-to-br from-sky-100 via-orange-50 to-yellow-100 min-h-screen">
      {/* Hero/Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-400 via-orange-200 to-yellow-200 py-20 mb-0">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Adventure travel banner" className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none select-none" loading="lazy" />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold font-sans rounded text-sky-900 drop-shadow-lg mb-4">Destination Finder</h1>
        </div>
      </section>
      {/* Section divider (wave) */}
      <div className="-mt-8 mb-8">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
          <path fill="#FFF7ED" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" />
        </svg>
      </div>
      {/* Search & filter bar */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4 mb-8 flex flex-col md:flex-row items-stretch md:items-center gap-4">
        {/* Destination input (autocomplete) */}
        <div className="mb-2 w-full relative">
          <input
            type="text"
            placeholder="Enter a destination (e.g., Goa, Manali, Jaipur)"
            value={destinationInput}
            onChange={e => {
              setDestinationInput(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            className="w-full px-5 py-4 rounded-full border border-orange-200 shadow focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all font-sans text-gray-700 text-base md:text-lg mb-2"
          />
          {showSuggestions && destinationInput && (
            <ul className="absolute left-0 right-0 bg-white border border-orange-200 rounded-xl shadow-lg mt-1 z-10 max-h-56 overflow-y-auto">
              {popularDestinations.filter(dest => dest.toLowerCase().includes(destinationInput.toLowerCase())).slice(0,8).map(dest => (
                <li
                  key={dest}
                  onMouseDown={() => {
                    setDestinationInput(dest);
                    setShowSuggestions(false);
                  }}
                  className="px-5 py-3 cursor-pointer hover:bg-orange-50 text-gray-700 text-base"
                >
                  {dest}
                </li>
              ))}
              {popularDestinations.filter(dest => dest.toLowerCase().includes(destinationInput.toLowerCase())).length === 0 && (
                <li className="px-5 py-3 text-gray-400">No matches found</li>
              )}
            </ul>
          )}
        </div>
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="Search destinations..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-4 rounded-full border border-orange-200 shadow focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all font-sans text-gray-700 text-base md:text-lg" 
          />
          {isLoading && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Loader2 className="h-5 w-5 text-orange-500 animate-spin" />
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-center">
          <button className="px-5 py-3 rounded-full bg-orange-100 text-orange-700 font-semibold text-base hover:bg-orange-200 transition w-full sm:w-auto min-w-[120px]">Beach 🌴</button>
          <button className="px-5 py-3 rounded-full bg-teal-100 text-teal-700 font-semibold text-base hover:bg-teal-200 transition w-full sm:w-auto min-w-[120px]">Mountains 🏔️</button>
          <button className="px-5 py-3 rounded-full bg-amber-100 text-amber-700 font-semibold text-base hover:bg-amber-200 transition w-full sm:w-auto min-w-[120px]">Culture 🏛️</button>
          <button className="px-5 py-3 rounded-full bg-slate-100 text-slate-700 font-semibold text-base hover:bg-slate-200 transition w-full sm:w-auto min-w-[120px]">Urban 🏙️</button>
        </div>
      </div>

      {/* Trending Suggestions */}
      <div className="max-w-4xl mx-auto px-2 sm:px-4 mb-8">
        <div className="flex items-center gap-2 text-sky-600 mb-3">
          <TrendingUp className="h-5 w-5 text-orange-500" />
          <span className="font-semibold">Trending Now</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {trendingDestinations.map((dest, idx) => (
            <button
              key={dest}
              onClick={() => setSearchQuery(dest)}
              className="px-4 py-3 rounded-full bg-orange-50 text-orange-600 text-base font-medium hover:bg-orange-100 transition-all duration-300 animate-fade-in w-full sm:w-auto min-w-[100px]"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {dest}
            </button>
          ))}
        </div>
      </div>

      {/* Destination grid */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 pb-32 md:pb-0">
        {destinations.map((dest, idx) => (
          <div 
            key={idx} 
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="relative">
              <img src={dest.img} alt={dest.name} className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold font-sans text-gray-900 mb-1">{dest.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                backgroundColor: ['#FF7043', '#4CAF50', '#2196F3', '#FFC107'][Math.floor(Math.random() * 4)],
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Sticky/floating Start Planning button */}
      <button 
        onClick={handleSearch}
        className="fixed bottom-0 left-0 right-0 mx-auto z-50 bg-gradient-to-r from-sky-400 to-orange-400 text-white rounded-none md:rounded-full px-6 py-6 md:py-4 shadow-xl font-bold text-lg hover:scale-105 transition-all w-full md:w-auto md:bottom-6 md:right-6 md:left-auto md:mx-0"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 1rem)' }}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin text-orange-500" />
            <span>Searching...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-sky-300 animate-pulse" />
            <span>Generate Destination</span>
          </div>
        )}
      </button>
    </main>
  );
};

export default DestinationFinder; 