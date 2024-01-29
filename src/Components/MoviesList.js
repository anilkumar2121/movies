// MoviesList.js
import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = () => {
  return (
    <div>
      <h2>Movies List</h2>
      <Link to="/display">Go to Display</Link>
    </div>
  );
};

export default MoviesList;
