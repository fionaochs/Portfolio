import React, { Component } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
// import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <div className="contactClass">
        <div id="contactDiv">
          <h1 id="contact">Contact</h1>
        </div>
        <h3 id="sentence">I look forward to hearing from you.</h3>
        <div className='links'>
          <h3 id="sentence">fionalochs@gmail.com</h3>
          <div id="icons">
            <a id="icon" href="https://www.linkedin.com/in/fionaochs/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
            <a  id="icon" href="https://github.com/fionaochs" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
            </div>
        </div>
      </div>
    )
  }
}
