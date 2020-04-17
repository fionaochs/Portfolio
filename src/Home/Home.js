import React, { Component } from 'react'
import { Link } from 'react-scroll';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="contactDiv">
          <Link className="contactbutton" activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
        </div>
        <div className="aboutDiv">
          <Link className="aboutbutton" activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>About Me</Link>
        </div>
      <div className="titleDiv">
        <h1 id="title">Fiona Ochs</h1>
      </div>
      <div className="projectsDiv">
        <Link className="projectsbutton" activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
      </div>
      <div className="techstackDiv">
        <Link className="techstackbutton" activeClass="active" to="techstack" spy={true} smooth={true} offset={0} duration={500}>Tech Stack</Link>
      </div>
    </div>
    )
  }
}
