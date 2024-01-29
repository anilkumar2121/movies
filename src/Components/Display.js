 
import React, { useContext, useState } from "react";
import { store } from "../App";
import RatingForm from "../Components/RatingFrom";

const Display = () => {
  const { data } = useContext(store);
  // const [successMessage, setSuccessMessage] = useState(null);

  // const handleSuccessMessage = (message, selectedMovie) => {
  //   setSuccessMessage({ message, selectedMovie });
  // };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <span>{item.MovieName}</span>
          <RatingForm movieIndex={index} />
          {typeof item.image === "string" ? (
            <img src={item.image} alt="" />
          ) : (
            <div>
              <img src={item.rating[0]} alt="" />
              <img src={item.image[1]} alt="" />
            </div>
          )}
        </div>
      ))}
{/* 
      {successMessage && (
        <div>
          <h3>{successMessage.selectedMovie.MovieName}</h3>
          <p>Rating: {successMessage.selectedMovie.rating}</p>
          <p>{successMessage.message}</p>
        </div>
      )} */}
    </div>
  );
};

export default Display;
