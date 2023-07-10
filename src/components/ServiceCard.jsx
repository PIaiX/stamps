import React from 'react';
import ReplacementMini from '../assets/imgs/replacement-mini.png';
import {Link} from 'react-router-dom';

const ServiceCard = () => {
  return (
    <figure className='service-card'>
      <img src={ReplacementMini} alt="Разработка логотипов" />
      <figcaption><h4><Link to="/">Разработка макетов полиграфической продукции</Link></h4></figcaption>
    </figure>
  );
};

export default ServiceCard;