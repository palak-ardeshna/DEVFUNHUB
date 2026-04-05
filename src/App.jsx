import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RoastGenerator from './pages/RoastGenerator';
import DevQuiz from './pages/DevQuiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roast" element={<RoastGenerator />} />
        <Route path="/quiz" element={<DevQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
