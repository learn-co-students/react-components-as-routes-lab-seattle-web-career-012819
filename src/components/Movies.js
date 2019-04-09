import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieCards = movies.map(movie => {
    const genres = movie.genres.map(genre => 
      <li>{genre}</li>
    )
    return (
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.time}</p>
        <ul>
          {genres}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
        {movieCards}
      </ul>
    </div>
  );
};

export default Movies;
