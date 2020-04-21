import React, { Component } from 'react'
import { Link } from 'react-scroll';
import './Styles.css';
import tree from '../Assets/logo.png'

export default class Home extends Component {
  render() {
    return (
      <div id="header">
        <div id="logo">
          <div className="titleDiv">
            <h1 id="title">Fiona Ochs <br/></h1>
            <h2>Full Stack <br/></h2>
            <h3>Software Developer</h3>
          </div>
            <img src={tree} alt="tree"/>
        </div>
        <div className="buttons">
          <Link className="button" activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>About Me</Link>
          <Link className="button" activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
          <Link className="button" activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
          <Link className="button" activeClass="active" to="techstack" spy={true} smooth={true} offset={0} duration={500}>Tech Stack</Link>
      </div>
    </div>
    )
  }
}
