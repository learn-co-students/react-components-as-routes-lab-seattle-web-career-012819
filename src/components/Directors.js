import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorCards = directors.map(director => {
    const movies = director.movies.map(movie =>
      <li><h3>{movie}</h3></li>  
    )
    return (
      <div>
        <h1>{director.name}</h1>
        <ul>
          {movies}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
        {directorCards}
      </ul>
    </div>
  );
}

export default Directors
