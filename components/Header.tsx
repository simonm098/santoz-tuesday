
import React from 'react';
import { PHONE_NUMBER, LOCATION } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 md:px-8 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <i className="fas fa-location-dot text-blue-400"></i>
            {LOCATION}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-1 hover:text-blue-400 transition-colors font-semibold">
            <i className="fas fa-phone-flip text-blue-400"></i>
            {PHONE_NUMBER}
          </a>
          <span className="hidden md:inline opacity-30">|</span>
          <span className="hidden md:inline">Open Mon - Sat: 8:00 AM - 6:00 PM</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="py-4 px-4 md:px-8 flex justify-between items-center max-w-7xl mx-auto">
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></div>
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-800">
            SANTOS<span className="text-blue-600">MOTORS</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-600">
          <a href="#gearboxes" className="hover:text-blue-600 transition-colors">Gearboxes</a>
          <a href="#engines" className="hover:text-blue-600 transition-colors">Engines</a>
          <a href="#suspension" className="hover:text-blue-600 transition-colors">Suspension</a>
          <a href="#body-parts" className="hover:text-blue-600 transition-colors">Body Parts</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors relative hidden sm:block">
            <i className="fas fa-search text-xl"></i>
          </button>
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-blue-200 flex items-center gap-2 hover:scale-105 active:scale-95 whitespace-nowrap group"
          >
            <i className="fas fa-phone-alt text-xs group-hover:animate-bounce"></i>
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
