import React from 'react';
import {Link} from 'react-router-dom';
import Replacement from '../assets/imgs/replacement.jpg';

const CategoryCard = () => {
  return (
    <figure className='category-card'>
      <img src={Replacement} alt="Печати для ООО" />
      <figcaption>
        <h4><Link to='/catalog/category' className="stretched-link">Печати для ООО</Link></h4>
      </figcaption>
    </figure>
  );
};

export default CategoryCard;