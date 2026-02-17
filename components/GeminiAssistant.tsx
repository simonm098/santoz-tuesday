
import React, { useState } from 'react';
import { gemini } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    const advice = await gemini.getPartsAdvice(input);
    setResponse(advice);
    setLoading(false);
    setInput('');
  };

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${isVisible ? 'w-80 md:w-96' : 'w-auto'}`}>
      {!isVisible ? (
        <button 
          onClick={() => setIsVisible(true)}
          className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform active:scale-95"
        >
          <i className="fas fa-robot text-2xl"></i>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-slide-up">
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <i className="fas fa-robot"></i>
              <span className="font-bold">Santos AI Assistant</span>
            </div>
            <button onClick={() => setIsVisible(false)} className="hover:opacity-70">
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 bg-slate-50 text-slate-700 text-sm">
            {response ? (
              <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                {response}
              </div>
            ) : (
              <p className="text-slate-400 text-center mt-10">Ask me about engine parts, gearbox maintenance, or what's best for your car!</p>
            )}
            {loading && <div className="flex gap-1 mt-4 ml-2"><span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span><span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span><span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span></div>}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-grow bg-slate-100 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
