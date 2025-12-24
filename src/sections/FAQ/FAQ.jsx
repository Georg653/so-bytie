import React, { useState } from 'react';
import './FAQ.css';
import starIcon from '../../assets/Star_8.svg';
import arrowIcon from '../../assets/arrow-up_svgrepo.com.svg';

const FAQ = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const faqData = [
    {
      question: "В какой срок я могу присоединиться к «со-бытию»?",
      answer: "Сбор проходит в даты: 25.12.2025 - 06.01.2026."
    },
    {
      question: "Кто участвует в акции?",
      answer: "Участники акции подопечные пансионатов и интернатов для взрослых с инвалидностью г.Минска, Брестской, Витебской, Гомельской, Гродненской, Могилевской и Минской области."
    },
    {
      question: "Что я могу подарить?",
      answer: (
        <span>
          Вы можете выбрать подарок из нашего <a href="https://docs.google.com/spreadsheets/d/1oN7if0GqZj8pxfIpQGPs6i9Xb9jQnepI3siPCf3siqA/edit?usp=sharing" target="_blank" rel="noreferrer">списка подарков</a>.
        </span>
      )
    },
    {
      question: "Можно ли перевести деньги?",
      answer: (
        <span>
          Да, на благотворительный счет акции. Подробные данные для перевода доступны по <a href="https://tiny.by/link/fc17d6f4b" target="_blank" rel="noreferrer">этой ссылке</a>.
        </span>
      )
    }
  ];

  const toggleAccordion = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
   <section className="faq" id="faq">
      <div className="container">
        <div className="faq__content">
          <div className="faq__white-block">
            <h2 className="faq__title">
              <img src={starIcon} alt="star" className="faq__star" />
              Частые вопросы
              <img src={starIcon} alt="star" className="faq__star" />
            </h2>

            <div className="faq__list">
              {faqData.map((item, index) => (
                <div 
                  key={index} 
                  className={`faq__item ${openIndices.includes(index) ? 'active' : ''}`}
                >
                  <div className="faq__question" onClick={() => toggleAccordion(index)}>
                    <span>{item.question}</span>
                    <img 
                      src={arrowIcon} 
                      alt="toggle" 
                      className={`faq__arrow ${openIndices.includes(index) ? 'rotate' : ''}`} 
                    />
                  </div>
                  <div className="faq__answer">
                    <div className="faq__answer-content">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;