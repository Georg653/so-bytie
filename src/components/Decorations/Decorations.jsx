import React from 'react';
import './Decorations.css';
import starPro from '../../assets/Star_Pro.svg';

const Decorations = () => {
  return (
    <div className="decorations">
      <img src={starPro} className="star-deco star-1" alt="" />
      <img src={starPro} className="star-deco star-2" alt="" />
      <img src={starPro} className="star-deco star-3" alt="" />
      <img src={starPro} className="star-deco star-4" alt="" />
      <img src={starPro} className="star-deco star-5" alt="" />
      <img src={starPro} className="star-deco star-6" alt="" />
      <img src={starPro} className="star-deco star-6" alt="" />
    
    </div>
  );
};

export default Decorations;