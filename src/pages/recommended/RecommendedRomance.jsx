import React, { useState, useEffect } from 'react';
import { actionMovies } from '../../images/recommended/romance'; 
import { Link } from 'react-router-dom';
import '../../Styles/recommended/Recommended.css';

const RecommendedRomance = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const imagesPerPage = 3;

  const showSlides = (index) => {
    const maxIndex = Math.ceil(actionMovies.length / imagesPerPage) - 1;
    if (index > maxIndex) {
      setSlideIndex(0);
    } else if (index < 0) {
      setSlideIndex(maxIndex);
    } else {
      setSlideIndex(index);
    }
  };

  const nextSlide = () => {
    showSlides(slideIndex + 1);
  };

  const prevSlide = () => {
    showSlides(slideIndex - 1);
  };

  useEffect(() => {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
  }, [slideIndex]);

  return (
    <div className='Recommended-page'>
      <div className='title'>
        - Recommendations -
      </div>
      <div className='genre'>
        Romance 😉
      </div>
      <div className="slider">
        <div className="slides">
          {actionMovies.map((movie, index) => (
            <div key={index} className="slide">
              <div className="rank">{movie.rank}</div>
              <img src={movie.image} alt={movie.name} />
              <div className="movie-info">
                <h3>{movie.name}</h3>
                <p><strong>Rating: ⭐</strong> {movie.rating}</p>
                <p><strong>Director: 🎬</strong> {movie.director}</p>
                <p><strong>Stars: 🎥</strong> {movie.stars}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="arrow prev" onClick={prevSlide}>
          <div className="arrow-top"></div>
          <div className="arrow-bottom"></div>
        </div>
        <div className="arrow next" onClick={nextSlide}>
          <div className="arrow-top"></div>
          <div className="arrow-bottom"></div>
        </div>
        <div className='description'>
        A "Romance" novel or romantic novel is a genre fiction 
        novel that primary focuses on the relationship and 
        romantic love between two people, typically with an 
        emotionally satisfying and optimistic ending.
        </div>
        <hr className='divider' />
        <div className='other-genres'>
           Other Genres 🎞️ 
        </div>
         <div className="button-group">
          <Link to="/recommended/thriller" className='button-icon-1'>
            <div className='icon-1'>
              🔪
            </div>
            <div className='cube-1'>
              <span className='side-1 front-1'>Thriller</span>
              <span className='side-1 top-1'>Feel the suspense</span>
            </div>
          </Link>
          <Link to="/recommended/adventure" className='button-icon-2'>
            <div className='icon-2'>
              🌄
            </div>
            <div className='cube-2'>
              <span className='side-2 front-2'>Adventure</span>
              <span className='side-2 top-2'>Where we going?</span>
            </div>
          </Link>
          <Link to="/recommended/comedy" className='button-icon-3'>
            <div className='icon-3'>
              😂
            </div>
            <div className='cube-3'>
              <span className='side-3 front-3'>Comedy</span>
              <span className='side-3 top-3'>some funny shit</span>
            </div>
          </Link>
          <Link to="/recommended/drama" className='button-icon-4'>
            <div className='icon-4'>
            🎭
            </div>
            <div className='cube-4'>
              <span className='side-4 front-4'>Drama</span>
              <span className='side-4 top-4'>bro its 3am rn 💀</span>
            </div>
          </Link>
          <Link to="/recommended/horror" className='button-icon-5'>
            <div className='icon-5'>
            😱
            </div>
            <div className='cube-5'>
              <span className='side-5 front-5'>Horror</span>
              <span className='side-5 top-5'>imma shit my pants</span>
            </div>
          </Link>
        </div>
        <div className="button-group-2">
          <Link to="/recommended/action" className='button-icon-6'>
            <div className='icon-6'>
            💥
            </div>
            <div className='cube-6'>
              <span className='side-6 front-6'>Action</span>
              <span className='side-6 top-6'>Good Shit</span>
            </div>
          </Link>
          <Link to="/recommended/animation" className='button-icon-7'>
            <div className='icon-7'>
              ✏️
            </div>
            <div className='cube-7'>
              <span className='side-7 front-7'>Animation</span>
              <span className='side-7 top-7'>drawing film</span>
            </div>
          </Link>
          <Link to="/recommended/anime" className='button-icon-8'>
            <div className='icon-8'>
            🍥
            </div>
            <div className='cube-8'>
              <span className='side-8 front-8'>Anime</span>
              <span className='side-8 top-8'>drawing film but japan</span>
            </div>
          </Link>
          <Link to="/recommended/sciencefiction" className='button-icon-9'>
            <div className='icon-9'>
            👽
            </div>
            <div className='cube-9'>
              <span className='side-9 front-9'>Science Fiction</span>
              <span className='side-9 top-9'>Very Real Stuff</span>
            </div>
          </Link>
          <Link to="/recommended/education" className='button-icon-10'>
            <div className='icon-10'>
            🤓
            </div>
            <div className='cube-10'>
              <span className='side-10 front-10'>Educational</span>
              <span className='side-10 top-10'>Recommended 👍</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendedRomance
