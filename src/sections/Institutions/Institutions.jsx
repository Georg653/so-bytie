import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Institutions.css';
import starIcon from '../../assets/Star_8.svg';
import closeIcon from '../../assets/Крест.svg';
import arrowIcon from '../../assets/arrow-up_svgrepo.com.svg';

const institutionsData = [
  {
    title: "ГУ «Кобринский социальный пансионат «Никольский»",
    desc: "Пансионат «Никольский» - это дом с заботой и вниманием для людей преклонного возраста и взрослых с инвалидностью. Здесь созданы условия для их безопасного проживания, медицинского обслуживания, социально-бытового ухода и душевного комфорта.",
    link: "https://kbrinternat.by/"
  },
  {
    title: "ГУ «Шерешевский социальный пансионат «Березовая роща»",
    desc: "Пансионат «Березовая роща» - теплый дом и профессиональная забота для пожилых людей и взрослых с инвалидностью, которые не могут жить самостоятельно. Здесь им обеспечивают медицинское обслуживание, реабилитацию, бытовой уход и душевное внимание.",
    link: "https://shereshevodi.by/"
  },
  {
    title: "ГУ «Браславский социальный пансионат «Озерный»",
    desc: "Пансионат «Озерный» в Браславе - это место, где созданы комфорт и внимание для людей преклонного возраста и совершеннолетних с особенностями здоровья, лишённых возможности жить независимо. Мы гарантируем безопасную среду, сохранение благополучия, повседневную поддержку.",
    link: "http://www.bras-ozerny.by/"
  },
  {
    title: "ГУ «Яковлевичский социальный пансионат «Домашний очаг»",
    desc: "Это место, где воссоздана атмосфера семейного тепла, заботы и уюта для людей преклонного возраста и взрослых с инвалидностью. Деятельность направлена на обеспечение их безопасности, постоянного бытового и медицинского ухода, а также эмоционального благополучия в кругу внимательного персонала.",
    link: "https://yakovlevichi-dominternat.by/"
  },
  {
    title: "ГУ «Мозырский социальный пансионат «Живописный»",
    desc: "Пансионат «Живописный» - это место, где забота о человеке сочетается с красотой окружающего мира. Мы создаём гармоничную среду для полноценной жизни людей преклонного возраста и взрослых с особенностями здоровья, предоставляя им безопасность, всестороннюю поддержку и возможность наслаждаться спокойствием живописной природы.",
    link: "https://zhivopisnyy.by/"
  },
  {
    title: "ГУ «Жлобинский социальный пансионат «Дубрава»",
    desc: "Пансионат «Дубрава» предоставляет полный спектр услуг стационарного социального обслуживания для граждан пожилого возраста и взрослых с инвалидностью.",
    link: "https://pansionatdubrava.by/"
  },
  {
    title: "ГУ «Волковысский социальный пансионат «Теолин»",
    desc: "Пансионат «Теолин» - пространство тишины и бережного сопровождения. Здесь создана особая среда, где жизнь людей зрелого возраста и тех, кто нуждается в постоянной помощи, обретает размеренность, смысл и защищённость. Это место, где достоинство и личная история каждого становятся основой для ежедневной заботы.",
    link: "https://www.instagram.com/volkovysk_pansionatteolin/"
  },
  {
    title: "ГУ «Молодечненский социальный пансионат «Тёплый дом»",
    desc: "Пансионат «Тёплый дом» полностью соответствует своему имени. Это место, где очаг заботы никогда не угасает. Мы создаём условия для комфортной, спокойной и наполненной жизни для людей преклонного возраста и взрослых с особенностями здоровья, окружая их постоянным вниманием, профессиональной поддержкой и простым человеческим теплом.",
    link: "https://molinternat.by/"
  },
  {
    title: "ГУ «Столбцовский социальный пансионат «Колосок»",
    desc: "Пансионат «Колосок» - это место, где ценят зрелость жизни и дарят ей бережную опеку. Мы создаём условия, в которых люди почтенного возраста и те, кто требует особого внимания, могут чувствовать себя под защитой, сохраняя связь с привычным укладом и естественными ритмами. Здесь каждый получает силу для нового дня.",
    link: "https://spdi.by/"
  },
  {
    title: "ГУ «Рестянский социальный пансионат «Приозерный»",
    desc: "«Приозерный» - это практика жизни в балансе. Для наших гостей - взрослых и пожилых людей - мы формируем экосистему, где медицинское наблюдение и бытовая поддержка становятся естественным продолжением безопасной и эстетически наполненной среды, вдохновлённой самой природой.",
    link: "https://mhcenter.by/listing/guso-restyanskij-dom-internat-dlya-prestarelyh-i-invalidov/"
  },
  {
    title: "ГУ «Могилевский социальный пансионат «Жемчужина»",
    desc: "«Жемчужина» - это воплощённая метафора: забота как процесс созидания драгоценности. Мы не обслуживаем, а курируем миры наших проживающих - взрослых и пожилых людей, создавая для них среду, где время течёт бережно, а повседневные ритуалы внимания накапливаются, словно перламутр, усиливая чувство защищённости, покоя и самоценности.",
    link: "https://mogilev-rik.gov.by/socialnaya-zaschita-naseleniya/gosudarstvennoe-uchrezhdenie-mogilevskiy-socialnyy-pansionat"
  },
  {
    title: "ГУ «Минский городской социальный пансионат Вяча»",
    desc: "«Вяча» - это пространство для жизни в ритме покоя. Мы сочетаем профессиональный медицинский уход с преимуществами загородной локации, создавая для наших проживающих - пожилых людей и взрослых с инвалидностью - атмосферу защищённости, стабильности и возможности дышать полной грудью.",
    link: "http://vyacha.by/"
  }
];

const Institutions = () => {
  const [selectedInst, setSelectedInst] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (selectedInst) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedInst]);

  const renderCard = (item, index) => (
    <div 
      key={index} 
      className="inst__card" 
      onClick={() => setSelectedInst(item)}
    >
      <img src={starIcon} alt="star" className="inst__card-star" />
      <span>{item.title}</span>
    </div>
  );

  return (
    <section className="inst">
      <div className="container">
        <div className="inst__white-block">
          <h2 className="inst__title">
            <img src={starIcon} alt="star" className="inst__star-title" />
            Участники акции
            <img src={starIcon} alt="star" className="inst__star-title" />
          </h2>

          <div className="inst__grid">
            {institutionsData.slice(0, 6).map((item, index) => renderCard(item, index))}
          </div>

          <div className={`inst__extra-container ${isExpanded ? 'open' : ''}`}>
            <div className="inst__extra-inner">
              <div className="inst__grid inst__grid--extra">
                {institutionsData.slice(6).map((item, index) => renderCard(item, index + 6))}
              </div>
            </div>
          </div>

          <div className="inst__more-wrapper">
            <button 
              className="inst__more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span>{isExpanded ? 'Скрыть' : 'Показать все'}</span>
              <img 
                src={arrowIcon} 
                alt="toggle" 
                className={`inst__more-arrow ${isExpanded ? 'rotate' : ''}`} 
              />
            </button>
          </div>
        </div>
      </div>

      {selectedInst && createPortal(
        <div className="modal-overlay" onClick={() => setSelectedInst(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedInst(null)}>
              <img src={closeIcon} alt="close" />
            </button>
            <h3 className="modal-title">{selectedInst.title}</h3>
            <p className="modal-desc">{selectedInst.desc}</p>
            <a 
              href={selectedInst.link} 
              target="_blank" 
              rel="noreferrer" 
              className="modal-btn"
            >
              Узнать больше
            </a>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Institutions;