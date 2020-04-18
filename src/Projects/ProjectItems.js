import React, { Component } from 'react'
import Project from './Project';
import styles from './Projects.css';
import { projects } from '../Data/Data';

export default class ProjectItems extends Component {
  render() {
    const { title, img, description, tech, repoLink, liveLink } = projects;

    // const newArray = { tech}.tech;
  // const splitTechStack = {tech}.map(item => {
  //   return (
  //     <p key={item}>— {item}</p>
  //   );
  // });
    return (
      <section className="projectItems">
      <img src={img} alt={title}></img>
      <div className={styles.textSection}>
        <section className={styles.links}>
          <a href={repoLink} rel="noopener noreferrer" target="_blank">GitHub</a>
          <a href={liveLink} rel="noopener noreferrer" target="_blank">Live Site</a>
        </section>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <h4>Tech Stack:</h4>
        {/* <p>{splitTechStack}</p> */}
      </div>
    </section>
    )
  }
}
