import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { promptCategories } from '../data/prompts';
import { PRODUCTION_URL } from '../utils/constants';

const AIPromptLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState(promptCategories[0].id);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const currentCategory = promptCategories.find(c => c.id === selectedCategory);

  const copyPrompt = (text, index) => {
    const shareText = `🤖 AI Prompt: "${text}"\n\nFind more professional prompts at DevFun Hub! 🚀\n${PRODUCTION_URL}/prompts`;
    navigator.clipboard.writeText(shareText);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <Link to="/" className="text-pink-400 hover:text-pink-300 mb-8 inline-block">← Back to Home</Link>
        <header className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent italic">AI Prompt Library 🤖</h1>
          <p className="text-gray-400 text-xl font-medium tracking-wide">Copy-paste professional prompts for your next project 🚀</p>
        </header>

        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {promptCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-8 py-3 rounded-full font-bold transition transform hover:scale-105 active:scale-95 text-lg ${
                selectedCategory === cat.id ? 'bg-pink-600 text-white shadow-xl shadow-pink-500/30' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom duration-500">
          {currentCategory.prompts.map((prompt, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-3xl border border-gray-700 hover:border-pink-500/50 transition-all flex flex-col h-full group shadow-2xl">
              <h3 className="text-xl font-black text-pink-400 mb-3 uppercase tracking-wider italic">{prompt.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">{prompt.text}</p>
              <button
                onClick={() => copyPrompt(prompt.text, index)}
                className={`w-full py-3 rounded-2xl font-black transition transform active:scale-95 uppercase tracking-widest text-xs ${
                  copiedIndex === index ? 'bg-green-500 text-white' : 'bg-gray-700 hover:bg-pink-600 text-white group-hover:shadow-lg group-hover:shadow-pink-500/20'
                }`}
              >
                {copiedIndex === index ? 'Copied! ✅' : 'Copy Prompt 📋'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIPromptLibrary;
