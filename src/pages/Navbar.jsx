import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = (e) => {
    e.preventDefault();  // Prevent the default link behavior
    setDropdownVisible(prev => !prev);
  };

  return (
    <div>
      <div className='navbar'>
        <div className='left'>
          Pluto 🌑
        </div>
        <div className='middle'>
          <Link to="/home"> Home </Link>
          <div className="dropdown">
            <a href="#" onClick={handleDropdownToggle}> Recommended </a>
            {dropdownVisible && (
              <div className="dropdown-content">
                <Link to="/recommended/thriller">Thriller</Link>
                <Link to="/recommended/action">Action</Link>
                <Link to="/recommended/adventure">Adventure</Link>
                <Link to="/recommended/comedy">Comedy</Link>
                <Link to="/recommended/drama">Drama</Link>
                <Link to="/recommended/horror">Horror</Link>
                <Link to="/recommended/romance">Romance</Link>
                <Link to="/recommended/animation">Animation</Link>
                <Link to="/recommended/anime">Anime</Link>
                <Link to="/recommended/sciencefiction">SciFi</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
