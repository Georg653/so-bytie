import React from 'react';
import './Footer.css';
import logoWhite from '../../assets/logo2.svg';
import secondaryLogo from '../../assets/ме-лого-06-removebg-preview.png';
import instIcon from '../../assets/Inst.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__logo-block">
          <div className="footer__logo">
            <img src={logoWhite} alt="СО-БЫТИЕ" className="footer__logo-main" />
          </div>
          <div className="footer__logo-sec">
            <img src={secondaryLogo} alt="Партнер" className="footer__logo-secondary" />
          </div>
        </div>

        <div className="footer__nav">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#main">Главная</a></li>
            <li><a href="#about">Об акции</a></li>
            <li><a href="#help">Как помочь?</a></li>
            <li><a href="#faq">Вопросы</a></li>
            <li><a href="#points">Пункты сбора</a></li>
          </ul>
        </div>

        <div className="footer__contacts">
          <h4>Контакты</h4>
          <p>Вячеслав</p>
          <a href="tel:+375293089690">+375 (29) 308-96-90</a>
        </div>

        <div className="footer__social">
          
          <a href="https://www.instagram.com/so.bytie/" target="_blank" rel="noreferrer" className="footer__inst">
            <img src={instIcon} alt="Instagram" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;