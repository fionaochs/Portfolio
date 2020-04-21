import React, { Component } from 'react'
import ProjectItems from './Project'
import { projects } from '../Data/Data'
// import './Projects.css'

export default class Projects extends Component {
  state = {
    index: 0,
  }
  updateProjects = (increment) => {
    const currentProject = this.state.index;
    const newProject = currentProject + increment;
    this.state.index === 2 ? this.setState({ index: 0 }) : 
    this.setState({
      index: newProject
    });
    this.state.index === -1 ? this.setState({ index: 2 }) : 
    this.setState({
      index: newProject
    });
    this.state.index === -2 ? this.setState({ index: 1 }) : 
    this.setState({
      index: newProject
    });
    this.state.index === -3 ? this.setState({ index: 0 }) : 
    this.setState({
      index: newProject
    });
  }
  handleBack = (e) => {
    e.preventDefault();
    this.updateProjects(-1);
  }
  handleNext = (e) => {
    e.preventDefault();
    this.updateProjects(1);
  }
  render() {
    return (
      <div id="projects">
        <div id="projectsDiv">
          <h1>Projects</h1>
        </div>
        <section className="projects">
          <button onClick={this.handleBack}>Prev</button>
            <ProjectItems {...projects[this.state.index]} />
          <button className="next" onClick={this.handleNext}>Next</button>
      </section>
    </div>
    )
  }
};

