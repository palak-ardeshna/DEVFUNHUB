import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { roasts } from '../data/roasts';
import { PRODUCTION_URL } from '../utils/constants';

const RoastGenerator = () => {
  const [name, setName] = useState('');
  const [roast, setRoast] = useState('');
  const [copied, setCopied] = useState(false);

  const generateRoast = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const randomIndex = Math.floor(Math.random() * roasts.length);
    const selectedRoast = roasts[randomIndex].replace('{name}', name);
    setRoast(selectedRoast);
    setCopied(false);
  };

  const copyRoast = () => {
    const text = `🔥 "${roast}"\n\nTry it: ${PRODUCTION_URL}/roast`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <Link to="/" className="text-purple-400 hover:text-purple-300 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Developer Roast Generator 🔥</h1>
          <p className="text-gray-400 text-lg">Enter a name and watch the burn! 😅</p>
        </header>

        <form onSubmit={generateRoast} className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
          <div className="mb-6">
            <label className="block text-gray-400 mb-2 font-medium">Developer Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul, Sneha, etc."
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-102 active:scale-95 shadow-lg"
          >
            Generate Roast 🔥
          </button>
        </form>

        {roast && (
          <div className="mt-12 p-8 bg-gradient-to-br from-red-600 to-pink-700 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-300">
            <h2 className="text-2xl font-bold text-center italic">
              "{roast}"
            </h2>
            <div className="mt-6 flex justify-center">
              <button
                onClick={copyRoast}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                  copied ? 'bg-green-500 text-white' : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                {copied ? 'Copied! 📋' : 'Copy Roast 📋'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoastGenerator;
