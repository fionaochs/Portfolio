import React, { Component } from 'react'
import { toolArr, backEnd, frontEnd, databases, langArr } from '../Data/Data';
import List from '../List';
import './TechStack.css'

export default class TechStack extends Component {
  render() {
    return (
      <div id="techstack">
        <div id="techTitle">
          <h2>Tech Stack</h2>
        </div>
        <div className="techDiv">
          <List className="list" arr={langArr} title={'Languages'} />
          <List className="list" arr={toolArr} title={'Tools'} />
          <List className="list" arr={backEnd} title={'Back End'} />
          <List className="list" arr={frontEnd} title={'Front End'} />
          <List className="list" arr={databases} title={'Databases'} />
          </div>
      </div>
    )
  }
}
