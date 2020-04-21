import React, { Component } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Contact.css'
import river from '../Assets/river.jpg';
import hobbitHole from '../Assets/hobbitholecrop2.png';

export default class Contact extends Component {
  render() {
    return (
      <div className="contactClass">
        <img className="photos" id="hobbit" src={hobbitHole} alt='hobbit'></img>
        <div className='links'>
          <h3 id="sentence1">I look forward to hearing from you.</h3>
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
