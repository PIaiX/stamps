import React from 'react';
import Replacement from '../assets/imgs/replacement.jpg';

const DraftsCard = () => {
  return (
    <figure className='draft-card'>
      <img src={Replacement} alt="Replacement" />
      <figcaption>
        <button type='button' className='btn-20 mx-auto'>заказать</button>
      </figcaption>
    </figure>
  );
};

export default DraftsCard;