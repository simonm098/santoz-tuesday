
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[500px] w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000" 
          alt="Garage Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl text-white">
          <span className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
            Premium Kenyan Spare Parts Hub
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Keep Your Engine <span className="text-blue-500">Roaring</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
            Find every mechanical and body part you need at Kirinyaga Road's most trusted automotive dealer. Quality guaranteed.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20">
              Browse Inventory
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Watch Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
