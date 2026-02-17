
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrder }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full border border-slate-100 transform hover:-translate-y-2">
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 flex flex-col gap-2">
           <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
            Genuine
          </div>
          <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 shadow-sm">
            In Stock
          </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-xl font-extrabold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Special Price</span>
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                KSh {product.price.toLocaleString()}
              </span>
            </div>
            <div className="text-green-500 flex items-center gap-1 text-xs font-bold bg-green-50 px-2 py-1 rounded-lg">
              <i className="fas fa-check-circle"></i> Verified
            </div>
          </div>
          
          <button 
            onClick={() => onOrder(product)}
            className="w-full bg-slate-900 hover:bg-blue-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-slate-200 hover:shadow-blue-200 active:scale-95 flex items-center justify-center gap-2 group/btn"
          >
            <span>Order Now</span>
            <i className="fas fa-arrow-right text-[10px] group-hover/btn:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
