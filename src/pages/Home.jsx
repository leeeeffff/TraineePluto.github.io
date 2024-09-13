import React, { useContext, useState } from 'react';
import { NameContext } from '../NameContext';
import '../Styles/Home.css';
import ActionHome from './ActionHome';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { name } = useContext(NameContext);
  const [showSubPage, setShowSubPage] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    setShowSubPage(true);
  };

  return (
    <div className='home-container'>
      {!showSubPage ? (
        <div className='text'>
          <h1>👋 Hi, {name}!</h1>
          <h2>Choose a genre you like...</h2>
          <div className='action'>
            <button type="button" className="glow-on-hover" onClick={() => navigate("/recommended/action")}>💥 ACTION</button>
            <button type="button" className="glow-on-hover" onClick={() => navigate("/recommended/thriller")}>🔪 THILLER</button>
            <button type="button" className="glow-on-hover" onClick={() => navigate("/recommended/adventure")}>🌄 ADVENTURE</button>
            <button type="button" className="glow-on-hover" onClick={() => navigate("/recommended/comedy")}>😂 COMEDY</button>
            <button type="button" className="glow-on-hover" onClick={() => navigate("/recommended/drama")}>🎭 DRAMA</button>
            <button type="button" className="glow-on-hover" onClick={() => navigate("/recommended/horror")}>😱 HORROR</button>
            <button type="button" className="glow-on-hover" onClick={() => navigate("/recommended/romance")}>😉 ROMANCE</button>
            <button type="button" className="glow-on-hover" onClick={() => navigate("/recommended/animation")}>✏️ ANIMATION</button>
            <button type="button" className="glow-on-hover" onClick={() => navigate("/recommended/anime")}>🍥 ANIME</button>
            <button type="button" className="glow-on-hover" onClick={() => navigate("/recommended/sciencefiction")}>👽 SCIENCE FICTION</button>
            <button type="button" className="glow-on-hover" onClick={() => navigate("/recommended/education")}>📖 EDUCATIONAL</button>
            <button type="button" className="glow-on-hover" >...</button>
          </div>
        </div>
      ) : (
        <div className='subpage'>
          <ActionHome />
        </div>
      )}
    </div>
  );
}

export default Home;
