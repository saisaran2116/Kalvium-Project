import React, { useState } from 'react';
import { Calendar, MapPin, Heart, Mountain, Utensils, CheckCircle, Hotel, Compass, Star, Sparkles } from 'lucide-react'; // Removed unused Users import

const preferences = [
  { label: 'Nature', icon: <Mountain className="h-5 w-5 text-green-500" /> },
  { label: 'Spiritual', icon: <Heart className="h-5 w-5 text-pink-500" /> },
  { label: 'Food', icon: <Utensils className="h-5 w-5 text-orange-400" /> },
  { label: 'Luxury', icon: <Hotel className="h-5 w-5 text-yellow-500" /> },
  { label: 'Adventure', icon: <Compass className="h-5 w-5 text-sky-500" /> },
  { label: 'Culture', icon: <Star className="h-5 w-5 text-amber-500" /> },
];


const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const TripPlanner: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    preferences: [] as string[],
    month: '',
    duration: '',

  });
  const [plan] = useState<string | null>(null);

  // Stepper navigation
  const nextStep = () => setStep((s) => Math.min(s + 1, 2));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  // Handlers for form fields
  const togglePreference = (pref: string) => {
    setFormData((prev) => ({
      ...prev,
      preferences: prev.preferences.includes(pref)
        ? prev.preferences.filter((p) => p !== pref)
        : [...prev.preferences, pref],
    }));
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-sky-100 via-orange-50 to-yellow-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 items-stretch">
        {/* Main Wizard */}
        <div className="flex-1 h-full bg-white/90 rounded-2xl shadow-xl border border-sky-100 p-6 flex flex-col">
          <div className="text-center mb-10 pt-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-sky-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Your Personalized Itinerary, in Seconds</h1>
            <p className="text-lg md:text-xl text-sky-900 max-w-2xl mx-auto">Tell us your style, pace, and budget — let AI craft your ideal Indian adventure.</p>
          </div>
          {/* Stepper */}
          <div className="flex items-center justify-between mb-8">
            {[1,2].map((s) => (
              <div key={s} className="flex-1 flex flex-col items-center">
                <div className={`rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg border-2 ${step === s ? 'bg-gradient-to-br from-sky-400 to-orange-300 text-white border-orange-400 shadow-lg scale-110' : 'bg-white text-sky-500 border-sky-200'} transition-all`}>
                  {step > s ? <CheckCircle className="h-6 w-6 text-green-500" /> : s}
                </div>
                <span className={`mt-2 text-xs font-semibold ${step === s ? 'text-orange-500' : 'text-sky-400'}`}>{['Preferences','Dates'][s-1]}</span>
              </div>
            ))}
          </div>
          {/* Step 1: Preferences */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="mb-2 text-base font-semibold text-sky-700 flex items-center gap-2"><Sparkles className="h-5 w-5 text-orange-400" /> What are your travel interests?</div>
              <div className="flex flex-wrap gap-3">
                {preferences.map((pref) => (
                  <button
                    key={pref.label}
                    type="button"
                    onClick={() => togglePreference(pref.label)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 font-medium shadow-sm transition-all duration-200 text-base ${formData.preferences.includes(pref.label) ? 'bg-gradient-to-r from-sky-400 to-orange-200 text-white border-orange-300 scale-105' : 'bg-white border-sky-200 text-sky-700 hover:bg-sky-50'}`}
                  >
                    {pref.icon} {pref.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button onClick={nextStep} disabled={formData.preferences.length === 0} className="bg-gradient-to-r from-sky-400 to-orange-400 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition disabled:opacity-50">Next</button>
              </div>
            </div>
          )}
          {/* Step 2: Dates */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="mb-2 text-base font-semibold text-sky-700 flex items-center gap-2"><Calendar className="h-5 w-5 text-orange-400" /> When are you traveling?</div>
              <div className="flex flex-col md:flex-row gap-4">
                <select
                  value={formData.month}
                  onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                  className="flex-1 px-4 py-3 rounded-xl border border-sky-200 shadow focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-sky-50 hover:bg-sky-100"
                >
                  <option value="">Select Month</option>
                  {months.map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="flex-1 px-4 py-3 rounded-xl border border-sky-200 shadow focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-sky-50 hover:bg-sky-100"
                >
                  <option value="">Select Duration</option>
                  <option value="weekend">Weekend (2-3 days)</option>
                  <option value="short">Short Trip (4-6 days)</option>
                  <option value="week">Week Long (7-10 days)</option>
                  <option value="extended">Extended (10+ days)</option>
                </select>
              </div>
              <div className="flex justify-between gap-2 pt-4">
                <button onClick={prevStep} className="bg-sky-100 text-sky-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-sky-200 transition">Back</button>
                <button onClick={nextStep} disabled={!formData.month || !formData.duration} className="bg-gradient-to-r from-sky-400 to-orange-400 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition disabled:opacity-50">Destinations</button>
              </div>
            </div>
          )}
        </div>
        {/* Live Preview Panel (Desktop) */}
        <aside className="hidden md:flex flex-1 h-full bg-white/90 rounded-2xl shadow-xl border border-sky-100 p-6 flex-col">
          <div className="flex flex-col gap-4 animate-fade-in">
            <h3 className="text-lg font-bold text-sky-700 mb-2 flex items-center gap-2"><MapPin className="h-5 w-5 text-orange-400" /> Live Preview</h3>
            <div className="text-sky-800 text-base min-h-[120px]">
              {step < 4 ? (
                <>
                  <div className="mb-2">{formData.preferences.length > 0 && <span>Preferences: <b>{formData.preferences.join(', ')}</b></span>}</div>
                  <div className="mb-2">{formData.month && <span>Month: <b>{formData.month}</b></span>}</div>
                  <div className="mb-2">{formData.duration && <span>Duration: <b>{formData.duration}</b></span>}</div>
                </>
              ) : (
                <div className="whitespace-pre-line text-sky-900 font-mono">{plan}</div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default TripPlanner;