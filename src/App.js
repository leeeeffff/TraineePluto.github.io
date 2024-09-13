import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import RateMoviePage from './pages/RateMoviePage/RateMoviePage';
import RecommendedMoviesPage from './pages/recommended/RecommendedAction';
import Navbar from './pages/Navbar';
import Start from './pages/name';
import Footer from './pages/Footer'
import Thriller from './pages/recommended/RecommendedThriller';
import Adventure from './pages/recommended/RecommendedAdventure';
import Comedy from './pages/recommended/RecommendedComedy';
import Drama from './pages/recommended/RecommendedDrama';
import Horror from './pages/recommended/RecommendedHorror';
import Romance from './pages/recommended/RecommendedRomance';
import Animation from './pages/recommended/RecommendedAnimation';
import Anime from './pages/recommended/RecommendedAnime';
import Education from './pages/recommended/RecommendedEducational';
import ScienceFiction from './pages/recommended/RecommendedScienceFiction';
import './App.css';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/recommended/education' && location.pathname !== '/' ;
  const showFooter = location.pathname !== '/';

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recommended/action" element={<RecommendedMoviesPage />} />
        <Route path="/rate" element={<RateMoviePage />} />
        <Route path="/recommended/thriller" element={<Thriller/>} />
        <Route path="/recommended/adventure" element={<Adventure/>} />
        <Route path="/recommended/comedy" element={<Comedy/>} />
        <Route path="/recommended/drama" element={<Drama/>} />
        <Route path="/recommended/horror" element={<Horror/>} />
        <Route path="/recommended/education" element={<Education/>} />
        <Route path="/recommended/romance" element={<Romance/>} />
        <Route path="/recommended/animation" element={<Animation/>} />
        <Route path="/recommended/anime" element={<Anime/>} />
        <Route path="/recommended/sciencefiction" element={<ScienceFiction/>} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
