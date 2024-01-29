 

 
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { store } from '../App';

const MovieDisplay = () => {
  const { movieIndex } = useParams();
  const { data } = useContext(store);
  const selectedMovie = data[movieIndex];

  return (
    <div>
      <h3>{selectedMovie.MovieName}</h3>
      <p>Rating: {selectedMovie.rating}</p>
      
    </div>
  );
};

export default MovieDisplay;
