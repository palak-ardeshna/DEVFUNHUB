import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { bugs } from '../data/bugs';

const BugGenerator = () => {
  const [bug, setBug] = useState(null);
  const [copied, setCopied] = useState(false);

  const generateBug = () => {
    const randomIndex = Math.floor(Math.random() * bugs.length);
    setBug(bugs[randomIndex]);
    setCopied(false);
  };

  const copyBug = () => {
    const text = `🐛 Bug: ${bug.title}\n🐜 Description: ${bug.description}\n💡 Solution: ${bug.solution}\n\nCheck out more at DevFun Hub! 🚀`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <Link to="/" className="text-yellow-400 hover:text-yellow-300 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Random Bug Generator 😂</h1>
          <p className="text-gray-400 text-lg">Click for a random funny bug to share with your team! 🐛</p>
        </header>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 text-center">
          <button
            onClick={generateBug}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-black py-5 rounded-2xl transition transform hover:scale-102 active:scale-95 shadow-xl text-2xl uppercase tracking-widest"
          >
            Generate Bug 🐛
          </button>
        </div>

        {bug && (
          <div className="mt-12 p-10 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl shadow-2xl border-2 border-yellow-500/30 animate-in fade-in zoom-in duration-500">
            <h2 className="text-3xl font-black text-yellow-400 mb-6 italic underline decoration-yellow-500/50 underline-offset-8">
              {bug.title}
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                <p className="text-gray-400 text-sm uppercase font-bold mb-2">Description 🐜</p>
                <p className="text-xl text-gray-200 leading-relaxed">{bug.description}</p>
              </div>
              <div className="bg-green-500/10 p-6 rounded-2xl border border-green-500/20">
                <p className="text-green-400 text-sm uppercase font-bold mb-2">Solution 💡</p>
                <p className="text-xl text-green-100 font-medium italic">{bug.solution}</p>
              </div>
            </div>
            
            <div className="mt-10 flex justify-center">
              <button
                onClick={copyBug}
                className={`px-10 py-3 rounded-full font-black transition shadow-2xl uppercase text-sm ${
                  copied ? 'bg-green-500 text-white' : 'bg-white text-gray-900 hover:bg-yellow-400'
                }`}
              >
                {copied ? 'Copied! 📋' : 'Copy Bug 📋'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BugGenerator;
