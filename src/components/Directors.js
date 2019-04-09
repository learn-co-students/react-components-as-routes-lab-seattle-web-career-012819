import React, { Component } from 'react'
import { directors } from '../data';

class Directors extends Component {
  loadDirectors = () => {
    return (directors.map((dir, index) => (
      <div key={index}>
        <h2>Name: {dir.name}</h2>
        <p>Movies: </p>
        <ul>
          {dir.movies.map((mov, index) => (
            <li key={index}>{mov}</li>
          ))}
        </ul>
      </div>
    )))
  }
  
  render() {
    return(
      <div>
        <h1>Directors Page</h1>
        {this.loadDirectors()}
      </div>
    )
  }
}

export default Directors
