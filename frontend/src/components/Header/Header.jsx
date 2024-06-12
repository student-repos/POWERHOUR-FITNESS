import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/logo.png'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a href="#hero" className="logo-link">
        <div className={`logo-box ${isMenuOpen ? 'open' : ''}`}>
          <img className={`logo ${isMenuOpen ? 'open' : ''}`} src={Logo} alt="weight lifting logo" />
          <span className={`logo-text ${isMenuOpen ? 'open' : ''}`}>PowerHour</span>
        </div>
      </a>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#programs" onClick={() => setIsMenuOpen(false)}>Programs</a>
        <a href="#trainers" onClick={() => setIsMenuOpen(false)}>Trainers</a>
        <a href="#offers" onClick={() => setIsMenuOpen(false)}>Offers</a>
        <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
      </nav>
     <Link to="/signup" className="join-us" onClick={() => setIsMenuOpen(false)}>Join Us</Link>
      <button className="burger-menu" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </header>
  );
}

export default Header;
