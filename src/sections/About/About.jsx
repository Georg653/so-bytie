import React from 'react';
import './About.css';
import starIcon from '../../assets/Star_8.svg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__white-block">
            <h2 className="about__title">
              <img src={starIcon} alt="star" className="about__star" />
              О нашей акции
              <img src={starIcon} alt="star" className="about__star" />
            </h2>
            <div className="about__text">
              <p>
                Новый год и Рождество Христово - это не просто даты в календаре. 
                Это со-бытие, которое мы создаем общими усилиями. Событие, где 
                каждый из нас может стать частью одной большой, теплой истории.
              </p>
              <p>
                Где-то совсем рядом тихие голоса загадывают скромные, но такие важные желания. 
                Пожилые люди в интернатах ждут не просто подарка, они ждут знака, 
                что о них помнят, их любят, они не одиноки.
              </p>
              <p>
                Молодежный отдел Белорусской Православной Церкви приглашает вас 
                отозваться на эти голоса и стать со-творцами настоящего чуда.
              </p>
            </div>
          </div>

          <div className="about__blue-block">
            <p>
              Присоединяйтесь к нашему «Со-Бытию». Станьте помощником святого Николая 
              для тех, кто ждет его больше всего.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;