import React from 'react';
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
            <Route path='/contact' component={Contact} />
            <Route path='/projects' component={Projects} />
            <Route path='/techstack' component={TechStack} />
          </Switch>
    </Router>
    </div>
  );
}

export default App;
