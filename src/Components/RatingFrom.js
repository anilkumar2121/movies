// RatingForm.js
import React, { useState, useContext } from 'react';
import { store } from '../App';
import { useNavigate } from 'react-router-dom';


const RatingForm = ({ movieIndex }) => {
  const { data, setData } = useContext(store);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value, 10));
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    const updatedData = [...data];
    updatedData[movieIndex] = { ...data[movieIndex], rating };
    setData(updatedData);
    navigate(`/movie/${movieIndex}`);
  };

  return (
    <div>
      <form onSubmit={handleRatingSubmit}>
        <label>
          Rate this movie:
          <select value={rating} onChange={handleRatingChange}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <button type="submit">Submit Rating</button>
      </form>
    </div>
  );
};

export default RatingForm;
