import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import About from './About/About';
import TechStack from './TechStack/TechStack'
import Projects from './Projects/Projects'

function App() {
  return (
    <div className="container">
        <Home/>
      <section>
        <About/>
        <Projects/>
        <TechStack/>
        <Contact/>
      </section>
    </div>
  );
}

export default App;
