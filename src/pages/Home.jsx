import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTION_URL } from '../utils/constants';

const tools = [
  {
    id: 'roast',
    title: 'Developer Roast Generator 😅🔥',
    description: 'User naam nakhe → funny roast generate thay. Fun + shareable!',
    path: '/roast',
    color: 'bg-gradient-to-r from-red-500 to-pink-500',
    status: 'Ready',
  },
  {
    id: 'quiz',
    title: 'Dev Quiz: Which Developer Are You? 🧠',
    description: '5-6 questions answer karo and result share karo!',
    path: '/quiz',
    color: 'bg-gradient-to-r from-blue-500 to-indigo-500',
    status: 'Ready',
  },
  {
    id: 'salary',
    title: 'Salary Reality Check 💀',
    description: 'Expected vs Reality salary calculator. LinkedIn ready!',
    path: '/salary',
    color: 'bg-gradient-to-r from-green-500 to-teal-500',
    status: 'Ready',
  },
  {
    id: 'bug',
    title: 'Random Bug Generator 😂',
    description: 'Click for a random funny bug to share with your team.',
    path: '/bug',
    color: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    status: 'Ready',
  },
  {
    id: 'typing',
    title: 'Typing Speed for Coders ⚡',
    description: 'How fast can you type real code? Competitive + addictive!',
    path: '/typing',
    color: 'bg-gradient-to-r from-cyan-500 to-blue-500',
    status: 'Ready',
  },
  {
    id: 'prompts',
    title: 'AI Prompt Library 🤖',
    description: 'Copy-paste professional prompts for your next project.',
    path: '/prompts',
    color: 'bg-gradient-to-r from-pink-500 to-rose-500',
    status: 'Ready',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Idea Generator 🎨',
    description: 'Stop thinking, start building! Get random project ideas.',
    path: '/portfolio',
    color: 'bg-gradient-to-r from-orange-500 to-yellow-500',
    status: 'Ready',
  },
];

const Home = () => {
  const [copied, setCopied] = useState(false);

  const sharePlatform = () => {
    navigator.clipboard.writeText(PRODUCTION_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16 relative">
          <button 
            onClick={sharePlatform}
            className={`absolute top-0 right-0 px-4 py-2 rounded-lg text-sm transition hidden sm:block font-bold ${
              copied ? 'bg-green-500 text-white' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
            }`}
          >
            {copied ? 'Link Copied! ✅' : 'Share Platform 🔗'}
          </button>
          <h1 className="text-7xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent italic tracking-tighter">
            DevFun Hub
          </h1>
          <p className="text-2xl text-gray-400 font-medium tracking-wide">
            Timepass + Learning + Shareable tools for developers 🚀
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div key={tool.id} className="relative h-full">
              <Link
                to={tool.path}
                className={`${tool.color} block p-8 rounded-[2rem] transform transition hover:scale-102 duration-300 shadow-2xl h-full border border-white/10`}
              >
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-black uppercase tracking-tight italic leading-tight">{tool.title}</h2>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${tool.status === 'Ready' ? 'bg-white/20 text-white' : 'bg-black/20 text-gray-400'}`}>
                    {tool.status}
                  </span>
                </div>
                <p className="text-white/90 text-lg mb-8 font-medium italic leading-relaxed">{tool.description}</p>
                <div className="inline-block bg-white text-gray-900 px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl">
                  Try Now →
                </div>
              </Link>
            </div>
          ))}
        </div>

        <footer className="mt-32 text-center">
          <div className="inline-block bg-gray-800/50 backdrop-blur-xl px-12 py-6 rounded-[2rem] border border-gray-700 shadow-2xl">
            <p className="text-gray-400 font-bold text-lg italic tracking-wide">
              Built for the dev community with ❤️ | 
              <span className="text-purple-400 ml-3">#DevFunHub #CodeLife #DeveloperFun</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
