import React, { Component } from 'react'
import { toolArr, backEnd, frontEnd, databases, langArr } from '../Data/Data';
import List from '../List';
import styles from './TechStack.css'

export default class TechStack extends Component {
  render() {
    return (
      <div id="techstack">
          <List arr={langArr} title={'LANGUAGES'} />
          <List arr={toolArr} title={'TOOLS'} />
          <List arr={backEnd} title={'BACK END'} />
          <List arr={frontEnd} title={'FRONT END'} />
          <List arr={databases} title={'DATABASES'} />
      </div>
    )
  }
}
