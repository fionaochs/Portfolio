import React, { Component } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1 id="contact">Contact</h1>
        <div className='links'>
          <h3>fionalochs@gmail.com</h3>
            <a href="https://www.linkedin.com/in/fionaochs/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
            <a href="https://github.com/fionaochs" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
        </div>
      </div>
    )
  }
}
