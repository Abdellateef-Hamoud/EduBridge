import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header">
      <nav className="navbar">
        <a href="#" className='logo'>
          EduBridge
        </a>

        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links-container ${isMenuOpen ? 'show' : ''}`}>
          <ul className="nav-links">
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Product</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>

          <div className="mobile-account">
            <a href='#' onClick={() => setIsMenuOpen(false)}>Login</a>
            <a href='#' className='btn-join' onClick={() => setIsMenuOpen(false)}>
              Join US <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="desktop-account">
          <a href='#'>Login</a>
          <a href='#' className='btn-join'>Join US <FaArrowRight /></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;