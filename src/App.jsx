import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.min.css';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
      anchors: ['home', 'about', 'projects', 'contact'],
      // navigationTooltips: ['Home', 'About', 'Projects', 'Contact'],
      showActiveTooltip: true,
      scrollOverflow: true,
    });
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow z-50 flex justify-between px-8 py-4">
        <div className="font-bold text-xl">Gamma</div>
        <ul className="flex gap-4 text-gray-700 font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div id="fullpage">
        <div className="section"><Home /></div>
        <div className="section"><About /></div>
        <div className="section"><Projects /></div>
        <div className="section"><Contact /></div>
      </div>
    </>
  );
}

export default App;