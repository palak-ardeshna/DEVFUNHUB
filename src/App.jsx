import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RoastGenerator from './pages/RoastGenerator';
import DevQuiz from './pages/DevQuiz';
import SalaryRealityCheck from './pages/SalaryRealityCheck';
import BugGenerator from './pages/BugGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roast" element={<RoastGenerator />} />
        <Route path="/quiz" element={<DevQuiz />} />
        <Route path="/salary" element={<SalaryRealityCheck />} />
        <Route path="/bug" element={<BugGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
