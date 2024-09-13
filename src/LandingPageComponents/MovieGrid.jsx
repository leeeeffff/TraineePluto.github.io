import React from 'react';
import MovieCard from './MovieCard';
import NavigationArrow from './NavigationArrow';
import './MovieGrid.css';

const MovieGrid = ({ movies, bigPoster, onLeftArrowClick, onRightArrowClick }) => {
  return (
    <div className="movie-grid-container">
      <NavigationArrow direction="left" onClick={onLeftArrowClick} />
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard key={index} title={movie.title} imgSrc={movie.imgSrc} />
        ))}
      </div>
      <div className="large-movie-card">
        <img src={bigPoster} alt="Large Poster" />
        <div className="overlay">
          <div className="myarrow" onClick={onRightArrowClick}>{'>'}</div>
        </div>
      </div>
      {/* <NavigationArrow direction="right" onClick={onRightArrowClick} /> */}
    </div>
  );
};

export default MovieGrid;
