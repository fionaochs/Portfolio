import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Project from './Project'
import './Projects.css'

export default class Projects extends Component {
  render() {

    return (
      <div id="projects">
        <div id="projectsDiv">
          <h1>Projects</h1>
        </div>
      <Carousel id="carousel" infiniteLoop={true} showThumbs={false}>        
          <div>
            <h3>title</h3>
            <img alt=''></img>
          </div>
          <div>
            <h3>title</h3>
            <img alt=''></img>
          </div>
          <div>
            <h3>title</h3>
            <img alt=''></img>

          </div>
          </Carousel>      
        </div>
    )
  }
}
