import React, { Component } from 'react';
import './About.css';
import river from '../Assets/river.jpg';
import hobbitHole from '../Assets/hobbitholecrop.png';
import mtCook from '../Assets/mtcook.jpg';

export default class About extends Component {
  render() {
    return (
      <div className="AboutMe" >
        <div id="aboutDiv">
          <h1 id="about">About Me</h1>
          </div>
        <div className='top'>
          <img id="hobbit" src={hobbitHole} alt='hobbit'></img>
          <p id="text">Full Stack Software Developer, striving to produce clean, testable and maintainable code. I love the data manipulation and logic driven side of back-end, while also interested in converting that data to a concise user interface. <br/> <br/>
          When I am not coding, and not stuck at home, I love to travel, be out  hiking, doing crossfit, baking healthy treats, brewing kombucha, playing board games and reading.
          </p> 
          <img id="cook" src={mtCook} alt='mtCook'></img>
        </div>
      <div className='bottom'>
        <img id="river" src={river} alt='river'></img>
      </div>
    </div>
    )
  }
}
