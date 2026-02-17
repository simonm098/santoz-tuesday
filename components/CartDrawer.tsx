
import React from 'react';
import { CartItem } from '../types';
import { WHATSAPP_NUMBER, EMAIL_ADDRESS } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleWhatsAppOrder = () => {
    const message = `Hello Santos Motors, I would like to order:\n\n${items.map(i => `- ${i.name} (x${i.quantity})`).join('\n')}\n\nTotal: KSh ${total.toLocaleString()}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmailOrder = () => {
    const subject = "New Order from Santos Motors Website";
    const body = `Items:\n${items.map(i => `${i.name} x${i.quantity}`).join('\n')}\n\nTotal Price: KSh ${total.toLocaleString()}`;
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="p-6 flex justify-between items-center border-bottom border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800">Your Inquiry</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-4">
              <i className="fas fa-shopping-cart text-6xl opacity-20"></i>
              <p className="text-lg">No items selected yet</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 items-center animate-fade-in">
                <img src={item.image} className="w-20 h-20 rounded-lg object-cover" alt={item.name} />
                <div className="flex-grow">
                  <h4 className="font-bold text-slate-800">{item.name}</h4>
                  <p className="text-sm text-slate-500">Qty: {item.quantity}</p>
                  <p className="font-semibold text-blue-600">KSh {item.price.toLocaleString()}</p>
                </div>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="p-2 text-red-400 hover:text-red-600 transition-colors"
                >
                  <i className="fas fa-trash-can"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-slate-50 border-t border-slate-200">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-600 font-medium">Estimated Total</span>
              <span className="text-2xl font-extrabold text-slate-900">KSh {total.toLocaleString()}</span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <button 
                onClick={handleWhatsAppOrder}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
              >
                <i className="fab fa-whatsapp text-xl"></i>
                Order via WhatsApp
              </button>
              <button 
                onClick={handleEmailOrder}
                className="w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <i className="fas fa-envelope text-lg"></i>
                Order via Email
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
