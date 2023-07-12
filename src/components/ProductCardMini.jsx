import React from 'react';
import {Link} from 'react-router-dom';
import Replacement from '../assets/imgs/replacement.jpg';
import useIsMobile from '../hooks/isMobile';

const ProductCardMini = () => {
  const mobileSM = useIsMobile('575px');

  return (
    <figure className="product-card-mini">
      <Link to='/catalog/category/product'>
        <img src={Replacement} alt="Ролл «Филадельфия»" />
      </Link>
      <figcaption>
        <h5 className='fs-10 fw-4'><Link to='/catalog/category/product'>Штемпельная краска Trodat (28ml)</Link></h5>
        {
          (mobileSM)
          ? <button type='button' className='btn-22 w-100'>340 ₽</button>
          : <div className="d-flex justify-content-between align-items-center">
            <p className='fw-5'>340 ₽</p>
            <button type='button' className='btn-22'>В корзину</button>
          </div>
        }
      </figcaption>
    </figure>
  );
};

export default ProductCardMini;