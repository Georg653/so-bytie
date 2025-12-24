import React from 'react';
import './Partners.css';
import starIcon from '../../assets/Star_8.svg';

const partnersData = [
  {
    title: "Синодальный отдел по церковной благотворительности и социальному служению БПЦ",
    link: "https://www.diaconia.by/"
  },
  {
    title: "РО «Православное религиозное братство в честь святого апостола Иоанна Богослова»",
    link: "https://bratstvo.minsk.by/"
  }
];

const Partners = () => {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <div className="partners__white-block">
          <h2 className="partners__title">
            <img src={starIcon} alt="star" className="partners__star" />
            Наши партнеры
            <img src={starIcon} alt="star" className="partners__star" />
          </h2>

          <div className="partners__grid">
            {partnersData.map((partner, index) => (
              <a 
                key={index} 
                href={partner.link} 
                target="_blank" 
                rel="noreferrer" 
                className="partners__card"
              >
                <h3 className="partners__card-title">{partner.title}</h3>
                <div className="partners__link-label">Перейти на сайт →</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;