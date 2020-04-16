import React, { Component } from 'react'
import Project from './Project';
import styles from './Projects.css';
import { projects } from '../Data/Data';

export default class Projects extends Component {
  render() {
    const projectElements = projects.map((project, i) => (
      <li key={i}>
        <Project {...project} />
      </li>
    ));
    return (
      <div>
        <h1 id="projects">Projects</h1>
      <ul className={styles.Projects}>
        {projectElements}
      </ul>
      </div>
    )
  }
}
