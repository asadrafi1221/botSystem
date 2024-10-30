import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Recovery from './components/Recovery';
import Signin from './components/Signin';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes with paths and components */}
        <Route path="/" element={<Signin />} />
        <Route path="/recover" element={<Recovery />} />
      </Routes>
    </Router>
  );
}

export default App;
