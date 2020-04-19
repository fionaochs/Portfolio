import React, { Component } from 'react'
import { projects } from '../Data/Data'
import './Projects.css'

export default class Project extends Component {
  render() {
    const { title, img, description, tech, repoLink, liveLink } = projects;

    const newArray = this.props.tech;
    console.log(this.props.tech)
    const splitTechStack = newArray.map(item => {
      return (
        <p key={item}>{item}</p>
      );
    });
    return (
      <div id="projectsBox">
      <section className="projectItems">
          <img src={this.props.img} alt={title}></img>
        <div className="textSection">
          <h1>{this.props.title}</h1>
          <h3 id="description">{this.props.description}</h3>
          <h3>Tech Stack:</h3>
          <p>{splitTechStack}</p>
            <section className="links">
              <a href={this.props.repoLink} rel="noopener noreferrer" target="_blank">GitHub  </a> 
              <a href={this.props.liveLink} rel="noopener noreferrer" target="_blank">Live Site</a>
            </section>
        </div>
      </section>
      </div>
    )
  }
}
