import React from 'react';
import './RateMoviePage.css';
import { Link } from 'react-router-dom';

const RateMoviePage = () => {
  return (
    <div>
      <div className="header">
        <span>
          <Link to="/allmovies" className='back-arrow'>&#8592; All Movies</Link>
        </span>
      </div>
      <div className="movie-poster">
        <img src="dune-poster.jpg" alt="Dune: Part Two" />
      </div>

      <div className="movie-info">
        <h1 className="movie-title">Dune: Part Two</h1>
        <div className="movie-genres">
          <span>Action</span>
          <span>Adventure</span>
          <span>Drama</span>
        </div>

        <div className="movie-details">
          <span>2021</span>
          <span>PG-13</span>
          <span>2h 35m</span>
        </div>
        
        <div className="rating">
          <div className="rating-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <span className="rating-score">8.0</span>
        </div>

        <div className="movie-stats">
          <span>811K viewed</span>
          <span>341K added view list</span>
        </div>

        <div className="movie-synopsis">
          <p>
            A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.
          </p>
        </div>

      </div>

    </div>
  );
};

export default RateMoviePage;