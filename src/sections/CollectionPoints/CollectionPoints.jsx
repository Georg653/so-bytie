import React from 'react';
import './CollectionPoints.css';
import starIcon from '../../assets/Star_8.svg';
import locationIcon from '../../assets/location.svg';

const pointsData = [
  {
    title: "ТРЦ «Призма»",
    address: "(г. Минск, Партизанский просп. 79), 2 этаж, пав.36",
    time: "Пн-Вс: 16:00 – 20:00"
  },
  {
    title: "ТЦ «МОМО»",
    address: "(г. Минск, ст. метро Могилевская, Партизанский просп. 150 А), 1 этаж возле елки",
    time: "Пн-Вс: 16:00 – 20:00"
  },
  {
    title: "ТЦ «Замок»",
    address: "(г.Минск, пр-т. Победителей 65), 1 этаж",
    time: "Пн-Вс: 16:00 – 20:00"
  },
  {
    title: "Универмаг Беларусь",
    address: "(г.Минск, ул. ул. Жилуновича 4), 1 этаж",
    time: "Пн-Вс: 16:00 – 20:00"
  },
  {
    title: "ТЦ «DANA MALL»",
    address: "г. Минск, улица Петра Мстиславца, 9, 1 этаж",
    time: "Пн-Вс: 16:00 – 20:00"
  },
  {
    title: "Свято-Георгиевский приход",
    address: "г. Минск, улица Голодеда, 60",
    time: "Пн-Вс: 08:00 – 20:00"
  },
  {
    title: "Приход храма святой Софии Слуцкой",
    address: "г. Минск, улица Казинца, 108",
    time: "Пн-Вс: 08:00 – 20:00"
  },
  {
    title: "Приход храма Архангела Михаила",
    address: "г. Минск, ул. Янковского, 2",
    time: "Пн-Вс: 08:00 – 20:00"
  },
  {
    title: "Свято-Духов кафедральный собор",
    address: "г. Минск, ул. Кирилла и Мефодия, 3 (м. Немига)",
    time: "Пн-Вс: 08:00 – 20:00"
  },
  {
    title: "Фонд им. Евфросинии Полоцкой",
    address: "г. Минск, ул. Киселева, 38",
    time: "Пн-Вс: 09:00 – 20:00"
  },
  {
    title: "Приход храма иконы Божией Матери «Всецарица»",
    address: "г. Минск, ул. Железнодорожная, 23 Г",
    time: "Пн-Вс: 08:00 – 20:00"
  },
  {
    title: "Храм иконы Божьей Матери «Всех скорбящих Радость»",
    address: "г. Минск, ул. Притыцкого, 65 (здание приходского дома)",
    time: "Пн-Вс: 09:00 – 20:00"
  }
];

const CollectionPoints = () => {
  return (
   <section className="points" id="points">
      <div className="container">
        <div className="points__white-block">
          <h2 className="points__title">
            <img src={starIcon} alt="star" className="points__star" />
            Пункты сбора
            <img src={starIcon} alt="star" className="points__star" />
          </h2>

          <div className="points__grid">
            {pointsData.map((point, index) => (
              <div key={index} className="points__card">
                <div className="points__card-header">
                  <h3 className="points__card-title">{point.title}</h3>
                  <img src={locationIcon} alt="location" className="points__icon" />
                </div>
                <p className="points__address">{point.address}</p>
                <p className="points__time">{point.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionPoints;