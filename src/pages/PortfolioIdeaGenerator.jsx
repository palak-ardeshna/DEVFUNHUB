import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioIdeas } from '../data/portfolio';
import { PRODUCTION_URL } from '../utils/constants';

const PortfolioIdeaGenerator = () => {
  const [idea, setIdea] = useState(null);
  const [copied, setCopied] = useState(false);

  const generateIdea = () => {
    const random = portfolioIdeas[Math.floor(Math.random() * portfolioIdeas.length)];
    setIdea(random);
    setCopied(false);
  };

  const copyIdea = () => {
    const text = `🎨 Portfolio Idea: ${idea.title}\n🔥 Tech: ${idea.tech}\n💪 Difficulty: ${idea.difficulty}\n📝 Description: ${idea.description}\n\nGet more ideas at DevFun Hub! 🚀\n${PRODUCTION_URL}/portfolio`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <Link to="/" className="text-orange-400 hover:text-orange-300 mb-8 inline-block">← Back to Home</Link>
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4 italic tracking-tight bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent uppercase">Portfolio Idea Generator 🎨</h1>
          <p className="text-gray-400 text-xl font-medium tracking-wide">Stop thinking, start building! 🚀</p>
        </header>

        <div className="bg-gray-800 p-12 rounded-3xl shadow-2xl border border-gray-700 text-center relative overflow-hidden group">
          <button
            onClick={generateIdea}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-6 rounded-3xl transition transform hover:scale-102 active:scale-95 shadow-xl text-3xl uppercase tracking-widest italic"
          >
            Generate Project Idea 🎨
          </button>
        </div>

        {idea && (
          <div className="mt-12 p-12 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-3xl shadow-2xl border-2 border-orange-500/30 animate-in fade-in zoom-in duration-500 relative">
             <div className="absolute -top-4 -right-4 bg-orange-600 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
               {idea.difficulty}
             </div>
             
             <h2 className="text-4xl font-black text-orange-400 mb-8 uppercase tracking-tighter italic border-b-2 border-orange-500/20 pb-4">
              {idea.title}
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:border-orange-500/30 transition-all">
                <p className="text-orange-400 text-xs uppercase font-black mb-3 tracking-widest italic">Tech Stack 🛠️</p>
                <p className="text-2xl text-gray-100 font-bold">{idea.tech}</p>
              </div>
              
              <div className="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:border-orange-500/30 transition-all">
                <p className="text-orange-400 text-xs uppercase font-black mb-3 tracking-widest italic">Description 📝</p>
                <p className="text-xl text-gray-300 leading-relaxed font-medium italic">{idea.description}</p>
              </div>
            </div>
            
            <div className="mt-12 flex justify-center">
              <button
                onClick={copyIdea}
                className={`px-12 py-4 rounded-full font-black transition transform active:scale-95 shadow-2xl uppercase text-sm tracking-widest ${
                  copied ? 'bg-green-500 text-white' : 'bg-white text-gray-900 hover:bg-orange-400'
                }`}
              >
                {copied ? 'Copied! 📋' : 'Copy Idea 📋'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioIdeaGenerator;
