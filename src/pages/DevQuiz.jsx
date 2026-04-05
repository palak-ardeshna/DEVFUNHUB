import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { quizQuestions, results } from '../data/quiz';

const DevQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState({
    senior: 0,
    junior: 0,
    'ai-dependent': 0,
    noob: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [finalResult, setFinalResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleAnswer = (type) => {
    setScore((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const highestScoreType = Object.keys(score).reduce((a, b) => 
      score[a] > score[b] ? a : b
    );
    setFinalResult(results[highestScoreType]);
    setShowResult(true);
    setCopied(false);
  };

  const copyResult = () => {
    const text = `🧠 Dev Quiz Result: ${finalResult.title}\n"${finalResult.description}"\n\nFind out your dev type at DevFun Hub! 🚀`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore({ senior: 0, junior: 0, 'ai-dependent': 0, noob: 0 });
    setShowResult(false);
    setFinalResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <Link to="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Home
        </Link>

        {!showResult ? (
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
            <div className="mb-8">
              <span className="text-blue-400 font-bold uppercase tracking-wider text-sm">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <h2 className="text-2xl font-bold mt-2">
                {quizQuestions[currentQuestion].question}
              </h2>
            </div>

            <div className="space-y-4">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.type)}
                  className="w-full text-left bg-gray-700 hover:bg-gray-600 p-4 rounded-xl transition transform hover:scale-101 active:scale-98 border border-gray-600 hover:border-blue-500"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-2xl shadow-2xl text-center animate-in fade-in zoom-in duration-500">
            <h2 className="text-gray-100 uppercase font-bold tracking-widest text-sm mb-2">
              YOUR RESULT
            </h2>
            <h1 className="text-4xl font-black mb-6">{finalResult.title}</h1>
            <p className="text-xl text-blue-100 mb-8">
              {finalResult.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={copyResult}
                className={`font-bold py-3 px-8 rounded-full transition ${
                  copied ? 'bg-green-500 text-white' : 'bg-white text-blue-700 hover:bg-blue-50'
                }`}
              >
                {copied ? 'Copied! 📋' : 'Share Result 🔗'}
              </button>
              <button
                onClick={resetQuiz}
                className="bg-blue-800 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-900 transition border border-blue-500"
              >
                Retake Quiz 🔄
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevQuiz;
