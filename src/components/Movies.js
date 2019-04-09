import React, { Component } from 'react'
import { movies } from '../data';

class Movies extends Component {
  loadMovies = () => {
    return(movies.map((movie, index) => (
      <div key={index}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time} minutes</p>
        <p>Genres: </p>
        <ul>
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    )))
  }

  render() {
    return (
      <div>
        <h1>Movies Page</h1>
        {this.loadMovies()}
      </div>
    )
  }
}

export default Movies;
