import React, { Component } from 'react'
import styles from '../App.css';
import PropTypes from 'prop-types';
import { projects } from '../Data/Data';

export default class Project extends Component {
  render() {
    const { title, description, tech, repoLink, liveLink } = projects;
    return (
      <div>
        <h3>{title}</h3>
        {/* <img src={img} alt={`image of ${title}`} /> */}
        <p>{description}</p>
        <p className={styles.emphasis}>{tech}</p>
        <nav>
          <a href={liveLink}>Live Site</a>
          <span>|</span>
          <a href={repoLink}>Repo</a>
        </nav>
      </div>
    )
  }
}
Project.propTypes = {
  title: PropTypes.string.isRequired,
  // img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired
};