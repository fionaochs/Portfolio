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
        <Carousel showThumbs={false} infiniteLoop={true}>
        <div style={{ height: "200px", color: "#fff" }}>this is slide 1</div>
        <div style={{ height: "200px", color: "#fff" }}>this is slide 2</div>
        <div style={{ height: "200px", color: "#fff" }}>this is slide 3</div>
      </Carousel>     
    </div>
    )
  }
}
