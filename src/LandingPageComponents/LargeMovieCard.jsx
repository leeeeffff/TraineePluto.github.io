import React from 'react';
import './LargeMovieCard.css';

const LargeMovieCard = ({ title, imgSrc }) => {
  return (
    <div className="large-movie-card">
      <img src={imgSrc} alt={title} />
      {/* <h3>{title}</h3> */}
    </div>
  );
};

export default LargeMovieCard;
