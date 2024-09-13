import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, imgSrc }) => {
  return (
    <div className="movie-card">
      <img src={imgSrc} alt={title} />
      {/* <h3>{title}</h3> */}
    </div>
  );
};

export default MovieCard;
