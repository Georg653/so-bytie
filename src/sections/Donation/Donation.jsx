import React, { useState } from 'react';
import './Donation.css';
import starIcon from '../../assets/Star_8.svg';

const Donation = () => {
  const [copied, setCopied] = useState(false);
  const eripCode = "36201-1-1";

  const handleCopy = () => {
    navigator.clipboard.writeText(eripCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="donation">
      <div className="container">
        <div className="donation__content">
          
          <div className="donation__white-block">
            <h2 className="donation__title">
              <img src={starIcon} alt="star" className="donation__star" />
              Сделать денежное пожертвование
              <img src={starIcon} alt="star" className="donation__star" />
            </h2>
            <p className="donation__desc">
              Не у всех есть время на покупки, но каждый может стать частью общего дела. 
              Любая сумма будет направлена на покупку недостающих или самых необходимых подарков. Это так же ценно!
            </p>
            <a 
              href="https://tiny.by/link/fc17d6f4b" 
              target="_blank" 
              rel="noreferrer" 
              className="donation__btn"
            >
              Пожертвовать
            </a>
          </div>

          <div className="donation__erip-block">
            <p className="donation__erip-sub">Или пожертвуйте через ЕРИП в ручную</p>
            <p className="donation__erip-main">
              В дереве ЕРИП выберите услугу "E-POS - оплата товаров и услуг" и введите код
            </p>
            <div 
              className={`donation__code ${copied ? 'copied' : ''}`} 
              onClick={handleCopy}
              title="Нажмите, чтобы скопировать"
            >
              {eripCode}
              {copied && <span className="donation__tooltip">Скопировано!</span>}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Donation;