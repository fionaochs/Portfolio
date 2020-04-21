import React, { Component } from 'react';
import './About.css';
import river from '../Assets/river.jpg';
import hobbitHole from '../Assets/hobbitholecrop2.png';
import mtCook from '../Assets/mtcook.jpg';

export default class About extends Component {
  render() { 
    return (
        <div className='aboutMe'>
          <p id="text">Hi, I'm Fiona Ochs, a Full Stack Software Developer, striving to produce clean, testable and maintainable code. I love the data manipulation and logic driven side of back-end, while also interested, in converting that data to concise data visualizations and user interfaces. <br/> <br/>
          When I am not coding, and not stuck at home, I love to travel, be out  hiking, do crossfit, bake healthy treats, play board games and read.
          </p> 
        </div>
    )
  }
}
