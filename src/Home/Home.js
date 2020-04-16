import React, { Component } from 'react'
import { Link } from 'react-scroll';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
      <Link className={styles.buttons} activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
      <Link className={styles.buttons} activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>About Me</Link>
      <div className="logo">
        <h1>Fiona Ochs</h1>
      </div>
      <Link className={styles.buttons} activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
      <Link className={styles.buttons} activeClass="active" to="techstack" spy={true} smooth={true} offset={0} duration={500}>Tech Stack</Link>
    </div>
    )
  }
}
