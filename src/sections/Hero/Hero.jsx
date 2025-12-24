import React from 'react';
import './Hero.css';
import heroImg from '../../assets/HeroImage.png';

const Hero = () => {
  return (
    <section className="hero" id="main">
      <div className="container hero__container">
        <img src={heroImg} alt="Charity event" className="hero__image" />
      </div>
    </section>
  );
};

export default Hero;