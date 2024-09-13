import React, { useState } from 'react';
import Header from '../../LandingPageComponents/Header';
import MovieGrid from '../../LandingPageComponents/MovieGrid';
import './LandingPage.css';
import actionImg1 from '../../LandingPageComponents/action.jpg';
import actionImg2 from '../../LandingPageComponents/action2.jpg';
import adventureImg1 from '../../LandingPageComponents/adventure.jpg';
import adventureImg2 from '../../LandingPageComponents/adventure2.jpg';
import animationImg1 from '../../LandingPageComponents/animation.jpg';
import animationImg2 from '../../LandingPageComponents/animation2.jpg';
import documentaryImg1 from '../../LandingPageComponents/documentary.jpg';
import documentaryImg2 from '../../LandingPageComponents/documentary2.jpg';
import horrorImg1 from '../../LandingPageComponents/horror.jpg';
import horrorImg2 from '../../LandingPageComponents/horror2.jpg';
import crimeImg1 from '../../LandingPageComponents/crime.jpg';
import crimeImg2 from '../../LandingPageComponents/crime2.jpg';
import bigPosterAction from '../../LandingPageComponents/action.jpg';
import bigPosterAdventure from '../../LandingPageComponents/adventure.jpg';
import bigPosterAnimation from '../../LandingPageComponents/animation.jpg';
import bigPosterDocumentary from '../../LandingPageComponents/documentary.jpg';
import bigPosterHorror from '../../LandingPageComponents/horror.jpg';
import bigPosterCrime from '../../LandingPageComponents/crime.jpg';

const genres = ['Action', 'Adventure', 'Animation', 'Documentary', 'Horror', 'Crime'];

const generateMovies = (titlePrefix, img1, img2) => {
  let movies = [];
  for (let i = 1; i <= 12; i++) {
    movies.push({
      title: `${titlePrefix} Movie ${i}`,
      imgSrc: i <= 6 ? img1 : img2,
    });
  }
  return movies;
};

const movieData = {
  Action: {
    movies: generateMovies('Action', actionImg1, actionImg2),
    bigPoster: bigPosterAction,
  },
  Adventure: {
    movies: generateMovies('Adventure', adventureImg1, adventureImg2),
    bigPoster: bigPosterAdventure,
  },
  Animation: {
    movies: generateMovies('Animation', animationImg1, animationImg2),
    bigPoster: bigPosterAnimation,
  },
  Documentary: {
    movies: generateMovies('Documentary', documentaryImg1, documentaryImg2),
    bigPoster: bigPosterDocumentary,
  },
  Horror: {
    movies: generateMovies('Horror', horrorImg1, horrorImg2),
    bigPoster: bigPosterHorror,
  },
  Crime: {
    movies: generateMovies('Crime', crimeImg1, crimeImg2),
    bigPoster: bigPosterCrime,
  },
};

const LandingPage = () => {
  const [selectedGenre, setSelectedGenre] = useState('Action');
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [movies, setMovies] = useState(movieData[selectedGenre].movies.slice(0, 6));
  const [bigPoster, setBigPoster] = useState(movieData[selectedGenre].bigPoster);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setCurrentMovieIndex(0);
    setMovies(movieData[genre].movies.slice(0, 6));
    setBigPoster(movieData[genre].bigPoster);
  };

  const handleLeftArrowClick = () => {
    const newIndex = currentMovieIndex > 0 ? currentMovieIndex - 6 : 0;
    setCurrentMovieIndex(newIndex);
    setMovies(movieData[selectedGenre].movies.slice(newIndex, newIndex + 6));
  };

  const handleRightArrowClick = () => {
    const newIndex = currentMovieIndex + 6 < movieData[selectedGenre].movies.length
      ? currentMovieIndex + 6
      : currentMovieIndex;
    setCurrentMovieIndex(newIndex);
    setMovies(movieData[selectedGenre].movies.slice(newIndex, newIndex + 6));
  };

  return (
    <div className="landing-page">
      <Header genres={genres} selectedGenre={selectedGenre} onGenreChange={handleGenreChange} />
      <MovieGrid
        movies={movies}
        bigPoster={bigPoster}
        onLeftArrowClick={handleLeftArrowClick}
        onRightArrowClick={handleRightArrowClick}
      />
    </div>
  );
};

export default LandingPage;
