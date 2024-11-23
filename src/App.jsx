import React, { useEffect } from 'react';
import './index.css';
import "./App.css"
import HeroPage from './components/HeroPage';
import Quote from './components/Quote';
import About from './components/About';
import LocomotiveScroll from "locomotive-scroll"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const locomotive  = new LocomotiveScroll();
 
  

  return (
    <div className='text-white bg-black'>
    {/* <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/About" element={<About/>}/>
      </Routes>
    </Router> */}
    <HeroPage/>
    
    </div>
   
  );
}

export default App;
