import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import MenuBody from './MenuBody';
import Footer from './Footer';
import Level1 from './Body'
import Level2 from './level2'
import Level3 from './level3'
import Level4 from './level4'

function StartMenu() {
  return (
    <Router>
      <div class="App">
        <Header />
        <br/>
        <MenuBody />
        <Routes>
          <Route path="/level1" element={<Level1 />}/>
          <Route path="/level2" element={<Level2 />}/>
          <Route path="/level3" element={<Level3 />}/>
          <Route path="/level4" element={<Level4 />}/>
        </Routes>
        <br/>
        <Footer />
      </div>
    </Router>
  );
}

export default StartMenu;
