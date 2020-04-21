import React, { Component } from 'react'
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import './Styles.css';
import tree from '../Assets/logo.png'

export default class Home extends Component {
  render() {
    return (
      <div id="header">
        <div id="logo">
          <div className="titleDiv">
            <h1 id="title1">Fiona Ochs <br/></h1>
            <h2>Full Stack <br/></h2>
            <h3>Software Developer</h3>
          </div>
            <img src={tree} alt="tree"/>
        </div>
        <div className="buttons">
        <nav>
            <Link className="button" to="/">About Me</Link>
            <Link className="button" to="/contact">Contact</Link>
            <Link className="button" to="/projects">Projects</Link>
            <Link className="button" to="/techstack">Tech Stack</Link>
        </nav>
      </div>
    </div>
    )
  }
}
