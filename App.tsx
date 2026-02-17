
import React, { useState, useMemo } from 'react';
import { Category, Product, CartItem } from './types';
import { PRODUCTS, PHONE_NUMBER, LOCATION } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import GeminiAssistant from './components/GeminiAssistant';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { id: 'gearboxes', title: 'Gearboxes', type: Category.GEARBOX },
    { id: 'engines', title: 'Engines', type: Category.ENGINE },
    { id: 'suspension', title: 'Suspension', type: Category.SUSPENSION },
    { id: 'body-parts', title: 'Body Parts', type: Category.BODY_PARTS },
  ];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.quantity, 0), [cart]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Maintenance/Status Banner with requested text */}
      <div className="bg-amber-50 border-y border-amber-100 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-amber-800 text-sm font-medium">
          <i className="fas fa-circle-exclamation animate-pulse"></i>
          <p>
            System Status: There was an unexpected error. Finish what you were doing. 
            There was an unexpected error. Finish what you were doing. 
            There was an unexpected error. Finish what you were doing.
          </p>
        </div>
      </div>

      <Hero />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Value Props */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-50 p-8 rounded-3xl flex items-center gap-6 border border-slate-100">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
              <i className="fas fa-certificate"></i>
            </div>
            <div>
              <h4 className="font-bold text-xl text-slate-800">Genuine Parts</h4>
              <p className="text-slate-500">100% Authentic quality</p>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl flex items-center gap-6 border border-slate-100">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
              <i className="fas fa-truck-fast"></i>
            </div>
            <div>
              <h4 className="font-bold text-xl text-slate-800">Fast Delivery</h4>
              <p className="text-slate-500">Across Nairobi & Kenya</p>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl flex items-center gap-6 border border-slate-100">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
              <i className="fas fa-shield-halved"></i>
            </div>
            <div>
              <h4 className="font-bold text-xl text-slate-800">Warranty</h4>
              <p className="text-slate-500">On all major assemblies</p>
            </div>
          </div>
        </section>

        {/* Product Sections */}
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="mb-24 scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-2">{cat.title}</h2>
                <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
              </div>
              <p className="text-slate-500 max-w-md">
                Expertly sourced {cat.type.toLowerCase()} designed for maximum performance and longevity in Kenyan road conditions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {PRODUCTS.filter(p => p.category === cat.type).map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onOrder={addToCart} 
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                SANTOS<span className="text-blue-500">MOTORS</span>
              </span>
            </div>
            <p className="mb-6 leading-relaxed">
              We provide the most reliable automotive spare parts in Kenya. Visit us on Kirinyaga Road for the best deals on engines, gearboxes, and more.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#gearboxes" className="hover:text-blue-400 transition-colors">Gearboxes</a></li>
              <li><a href="#engines" className="hover:text-blue-400 transition-colors">Engines</a></li>
              <li><a href="#suspension" className="hover:text-blue-400 transition-colors">Suspension Systems</a></li>
              <li><a href="#body-parts" className="hover:text-blue-400 transition-colors">Body Parts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-location-dot text-blue-500 mt-1"></i>
                <span>{LOCATION}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-blue-500"></i>
                <span>{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-blue-500"></i>
                <span>orders@santosmotors.co.ke</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to get updates on new shipments and arrivals.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full outline-none focus:border-blue-500" />
              <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-transform active:scale-95"><i className="fas fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-white/5 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Santos Motors Kenya. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Cart Button (Mobile) */}
      {cartCount > 0 && (
        <button 
          onClick={() => setIsCartOpen(true)}
          className="lg:hidden fixed bottom-6 left-6 z-40 bg-slate-900 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        >
          <i className="fas fa-shopping-cart text-xl"></i>
          <span className="absolute -top-1 -right-1 bg-blue-600 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
            {cartCount}
          </span>
        </button>
      )}

      {/* Components */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onRemove={removeFromCart} 
      />
      <GeminiAssistant />
    </div>
  );
};

export default App;
