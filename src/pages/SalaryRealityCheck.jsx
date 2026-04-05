import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { roles, funnyComments } from '../data/salary';
import { PRODUCTION_URL } from '../utils/constants';

const SalaryRealityCheck = () => {
  const [role, setRole] = useState(roles[0].label);
  const [exp, setExp] = useState(0);
  const [expected, setExpected] = useState('');
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const calculateSalary = (e) => {
    e.preventDefault();
    const selectedRole = roles.find(r => r.label === role);
    const base = selectedRole.base;
    const realityVal = Math.max(base + (exp * selectedRole.multiplier), 3).toFixed(1);
    const expectedVal = parseFloat(expected) || (realityVal * 1.5).toFixed(1);

    const randomIndex = Math.floor(Math.random() * funnyComments.length);
    const comment = funnyComments[randomIndex]
      .replace('{expected}', expectedVal)
      .replace('{reality}', realityVal);

    setResult({
      expected: expectedVal,
      reality: realityVal,
      comment
    });
    setCopied(false);
  };

  const copyReality = () => {
    const text = `💸 Expected: ${result.expected} LPA | Reality: ${result.reality} LPA\n\nCheck yours: ${PRODUCTION_URL}/salary`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <Link to="/" className="text-green-400 hover:text-green-300 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Salary Reality Check 💀</h1>
          <p className="text-gray-400 text-lg">Compare your dreams with reality! 😭</p>
        </header>

        <form onSubmit={calculateSalary} className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2 font-medium">Your Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              >
                {roles.map(r => <option key={r.label} value={r.label}>{r.label}</option>)}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-400 mb-2 font-medium">Experience (Years)</label>
              <input
                type="number"
                value={exp}
                onChange={(e) => setExp(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                min="0"
                max="50"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2 font-medium">Expected Salary (LPA)</label>
              <input
                type="number"
                value={expected}
                onChange={(e) => setExpected(e.target.value)}
                placeholder="e.g. 15"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition transform hover:scale-102 active:scale-95 shadow-lg"
          >
            Check Reality 😭
          </button>
        </form>

        {result && (
          <div className="mt-12 p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-green-500/30 animate-in fade-in zoom-in duration-300">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                <p className="text-gray-400 text-sm uppercase font-bold mb-1">Expected 😎</p>
                <p className="text-3xl font-black text-green-400">{result.expected} LPA</p>
              </div>
              <div className="text-center p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <p className="text-gray-400 text-sm uppercase font-bold mb-1">Reality 😭</p>
                <p className="text-3xl font-black text-red-400">{result.reality} LPA</p>
              </div>
            </div>
            <p className="text-xl text-center italic text-gray-300">
              "{result.comment}"
            </p>
            <div className="mt-8 flex justify-center">
              <button
                onClick={copyReality}
                className={`px-8 py-2 rounded-full font-bold transition shadow-lg ${
                  copied ? 'bg-green-500 text-white' : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {copied ? 'Copied! 📋' : 'Share Reality 🔗'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalaryRealityCheck;
