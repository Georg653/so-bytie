import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo1.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <a href="#main" onClick={closeMenu}><img src={logo} alt="СО-БЫТИЕ" /></a>
        </div>
        
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <a href="#main" onClick={closeMenu}>Главная</a>
          <a href="#about" onClick={closeMenu}>Об акции</a>
          <a href="#help" onClick={closeMenu}>Как помочь?</a>
          <a href="#faq" onClick={closeMenu}>Вопросы</a>
          <a href="#points" onClick={closeMenu}>Пункты сбора</a>
        </nav>

        <div className="header__actions">
          <a 
            href="https://tiny.by/link/fc17d6f4b" 
            target="_blank" 
            rel="noreferrer" 
            className="header__btn-link"
          >
            <button className="header__btn">Пожертвовать</button>
          </a>

          <button className={`header__burger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      {isMenuOpen && <div className="header__overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;