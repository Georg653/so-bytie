import React from 'react';
import './HowToHelp.css';
import starIcon from '../../assets/Star_8.svg';

const HowToHelp = () => {
  return (
    <section className="how-to" id="help">
      <div className="container">
        <div className="how-to__content">
          <div className="how-to__white-block">
            <h2 className="how-to__title">
              <img src={starIcon} alt="star" className="how-to__star-main" />
              Как стать частью со-бытия?
              <img src={starIcon} alt="star" className="how-to__star-main" />
            </h2>

            <div className="how-to__list">
              <div className="how-to__item">
                <p>
                  1. Присоединиться и подготовить. Выберите, соберите или купите желанный{' '}
                  <a href="https://docs.google.com/spreadsheets/d/1oN7if0GqZj8pxfIpQGPs6i9Xb9jQnepI3siPCf3siqA/edit?usp=sharing" target="_blank" rel="noreferrer" className="how-to__link">
                    подарок,
                    <img src={starIcon} alt="star" className="how-to__star-small" />
                  </a> следуя нашим простым рекомендациям.
                </p>
              </div>

              <div className="how-to__item">
                <p>
                  2. Передать. Принесите ваш дар в один из наших{' '}
                  <a href="#points" className="how-to__link">
                    пунктов сбора.
                    <img src={starIcon} alt="star" className="how-to__star-small" />
                  </a>
                </p>
              </div>

              <div className="how-to__item">
                <p>
                  3.{' '}
                  <a href="https://tiny.by/link/fc17d6f4b" target="_blank" rel="noreferrer" className="how-to__link">
                    Сделать денежное пожертвование.
                    <img src={starIcon} alt="star" className="how-to__star-small" />
                  </a> Не у всех есть время на покупки, но каждый может стать частью общего дела. Любая сумма будет направлена на покупку недостающих или самых необходимых подарков. Это так же ценно!
                </p>
              </div>

              <div className="how-to__item">
                <p>
                  4. Расскажите в своих соцсетях и чатах с семьей, друзьями, соседями или коллегами, что вы участвуете в акции. Предложите им{' '}
                  <a href="https://www.instagram.com/so.bytie/" target="_blank" rel="noreferrer" className="how-to__link">
                    присоединиться к «со-бытию».
                    <img src={starIcon} alt="star" className="how-to__star-small" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;