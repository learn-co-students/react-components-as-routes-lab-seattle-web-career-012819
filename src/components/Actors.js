import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorCards = actors.map(actor => {
    const movies = actor.movies.map(movie => <h3>{movie}</h3>)
    return (
      <li>
        <div>
          <h2>{actor.name}</h2>
          <ul>
            {movies}
          </ul>
        </div>
      </li>
    )}
  )

  return (
    <div>
      <h1>Actors Page</h1>
      <ul>
        {actorCards}    
      </ul>
    </div>
  );
};

export default Actors;
