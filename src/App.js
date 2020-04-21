import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import About from './About/About';
import TechStack from './TechStack/TechStack'
import Projects from './Projects/Projects'

function App() {
  return (
    <div className="container">
    <Router>
        <Home/>
        <Switch>
            <Route exact path='/' component={About} />
            <Route path='/portfolio' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route path='/techstack' component={TechStack} />
            <Route path='/contact' component={Contact} />
          </Switch>
    </Router>
    </div>
  );
}

export default App;
