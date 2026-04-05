import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { codeSnippets } from '../data/typing';
import { PRODUCTION_URL } from '../utils/constants';

const TypingSpeed = () => {
  const [snippet, setSnippet] = useState('');
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [stats, setStats] = useState({ wpm: 0, accuracy: 0 });
  const [copied, setCopied] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    generateNewSnippet();
    return () => clearInterval(intervalRef.current);
  }, []);

  const generateNewSnippet = () => {
    const random = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    setSnippet(random);
    setInput('');
    setStartTime(null);
    setTimer(0);
    setIsFinished(false);
    setCopied(false);
    clearInterval(intervalRef.current);
  };

  const copyStats = () => {
    const text = `⚡ Typing Speed: ${stats.wpm} WPM | ${stats.accuracy}% accuracy\n\nTry it: ${PRODUCTION_URL}/typing`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInput = (e) => {
    const val = e.target.value;
    if (!startTime) {
      setStartTime(Date.now());
      intervalRef.current = setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000);
    }

    setInput(val);

    if (val === snippet) {
      finishTest();
    }
  };

  const finishTest = () => {
    clearInterval(intervalRef.current);
    setIsFinished(true);
    const timeInMinutes = timer / 60 || 0.01;
    const words = snippet.split(' ').length;
    const wpm = Math.round(words / timeInMinutes);

    let correctChars = 0;
    const inputChars = input.split('');
    snippet.split('').forEach((char, i) => {
      if (inputChars[i] === char) correctChars++;
    });
    const accuracy = Math.round((correctChars / snippet.length) * 100);

    setStats({ wpm, accuracy });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <Link to="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">← Back to Home</Link>
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 italic tracking-tighter">Typing Speed for Coders ⚡</h1>
          <p className="text-gray-400">How fast can you type real code? ⌨️</p>
        </header>

        <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-700 relative overflow-hidden">
          <div className="absolute top-4 right-6 text-cyan-400 font-mono text-2xl font-black">
            {timer}s
          </div>
          
          <div className="mb-8 p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50 font-mono text-xl leading-relaxed select-none break-all">
            {snippet.split('').map((char, i) => {
              let color = 'text-gray-500';
              if (i < input.length) {
                color = input[i] === char ? 'text-cyan-400' : 'text-red-500 bg-red-500/20';
              }
              return <span key={i} className={color}>{char}</span>;
            })}
          </div>

          <textarea
            value={input}
            onChange={handleInput}
            disabled={isFinished}
            placeholder="Start typing the code above..."
            className="w-full bg-gray-700 border-2 border-gray-600 rounded-2xl p-6 font-mono text-xl focus:outline-none focus:border-cyan-500 transition-all h-32 resize-none"
            autoFocus
          />

          {isFinished && (
            <div className="mt-8 grid grid-cols-2 gap-6 animate-in zoom-in fade-in duration-500">
              <div className="bg-cyan-500/10 p-6 rounded-2xl border border-cyan-500/30 text-center">
                <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-1">Speed</p>
                <p className="text-4xl font-black">{stats.wpm} WPM</p>
              </div>
              <div className="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/30 text-center">
                <p className="text-purple-400 text-sm font-bold uppercase tracking-widest mb-1">Accuracy</p>
                <p className="text-4xl font-black">{stats.stats?.accuracy || stats.accuracy}%</p>
              </div>
              <button
                onClick={copyStats}
                className={`bg-cyan-600 text-white font-black py-4 rounded-2xl transition transform hover:scale-102 active:scale-95 uppercase tracking-widest ${
                  copied ? 'bg-green-500' : 'hover:bg-cyan-700'
                }`}
              >
                {copied ? 'Result Copied! ✅' : 'Share My Score 🔗'}
              </button>
              <button
                onClick={generateNewSnippet}
                className="bg-white text-gray-900 font-black py-4 rounded-2xl hover:bg-cyan-400 transition transform hover:scale-102 active:scale-95 uppercase tracking-widest"
              >
                Try Another Snippet 🔄
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypingSpeed;
