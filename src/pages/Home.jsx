import React from 'react';
import { Link } from 'react-router-dom';

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
];

const Home = () => {
  const sharePlatform = () => {
    navigator.clipboard.writeText(`Check out DevFun Hub! Fun tools for developers: ${window.location.origin}`);
    alert('Link copied to clipboard! 🚀');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16 relative">
          <button 
            onClick={sharePlatform}
            className="absolute top-0 right-0 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition hidden sm:block"
          >
            Share Platform 🔗
          </button>
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            DevFun Hub
          </h1>
          <p className="text-xl text-gray-400">
            Timepass + Learning + Shareable tools for developers 🚀
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <div key={tool.id} className="relative h-full">
              <Link
                to={tool.path}
                className={`${tool.color} block p-8 rounded-3xl transform transition hover:scale-102 duration-300 shadow-2xl h-full`}
                onClick={(e) => tool.status === 'Coming Soon' && e.preventDefault()}
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-bold">{tool.title}</h2>
                  <span className={`text-xs px-2 py-1 rounded-full ${tool.status === 'Ready' ? 'bg-green-500/20 text-green-300' : 'bg-gray-500/20 text-gray-400'}`}>
                    {tool.status}
                  </span>
                </div>
                <p className="text-white/80 text-lg mb-6">{tool.description}</p>
                {tool.status === 'Ready' && (
                  <div className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full font-bold">
                    Try Now →
                  </div>
                )}
              </Link>
            </div>
          ))}
        </div>

        <footer className="mt-24 text-center">
          <div className="inline-block bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-700">
            <p className="text-gray-400">
              Built for the dev community with ❤️ | 
              <span className="text-purple-400 ml-2">#DevFunHub #CodeLife</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
