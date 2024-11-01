import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Recovery from './components/Recovery';
import Signin from './components/Signin';
import Password from './components/Password';

function App() {
  useEffect(()=>{
    const baseurl = `http://localhost:3500`
  localStorage.setItem('Baseurl',baseurl)
  },[])
  

  return (
    <Router>
      <Routes>
        {/* Define routes with paths and components */}
        <Route path="/" element={<Signin />} />
        <Route path="Password" element={<Password/>}/>
        <Route path="/recover" element={<Recovery />} />
      </Routes>
    </Router>
  );
}

export default App;
