import React, { Component } from 'react'
import { actors } from '../data';

class Actors extends Component {
  loadActors = () => {
    return(actors.map((act, index) => (
      <div key={index}>
        <h2>Name: {act.name}</h2>
        <p>Movies: </p>
        <ul>
          {act.movies.map((mov, index) => (
            <li key={index}>{mov}</li>
          ))}
        </ul>
      </div>
    )))
  }
  
  render() {
    return(
      <div>
        <h1>Actors Page</h1>
        {this.loadActors()}
      </div>
    )
  }
}

export default Actors;
