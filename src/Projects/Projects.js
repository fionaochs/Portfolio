import React, { Component } from 'react'
import ProjectItems from './ProjectItems'
import { projects } from '../Data/Data'
export default class Projects extends Component {
  state = {
    index: 0,
    setIndex: 0
  }
  render() {
    // const [index, setIndex] = useState(0);
    
    const handleIncrement = (event) => {
      event.preventDefault();
      if(this.state.index === 3) this.state.setIndex(0);
      else this.state.setIndex(this.state.index + 1);
    };
    const handleDecrement = (event) => {
      event.preventDefault();
      if(this.state.index === 0) this.state.setIndex(3);
      else this.state.setIndex(this.state.index - 1);
    };
    
    return (
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="porjectsDiv">
          <button onClick={handleDecrement}><img alt="decrement arrow"></img></button>
          <ProjectItems {...projects[this.state.index]} />
          <button className="increment" onClick={handleIncrement}><img alt="increment arrow"></img></button>
      </div>
    </section>
    )
  }
}
