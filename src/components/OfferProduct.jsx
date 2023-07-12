import React from 'react';
import {Link} from 'react-router-dom';
import { IoChevronDownOutline } from "react-icons/io5";
import useIsMobile from '../hooks/isMobile';
import Replacement from '../assets/imgs/replacement.jpg';

const OfferProduct = () => {
  const isMobileLG = useIsMobile('991px');

  return (
    <div className="offer-product">
      <Link to='/catalog/category/product' className="offer-product-img">
        <img src={Replacement} alt="Краска штемпельная на водной основе цвет ЖЕЛТЫЙ" />
      </Link>
      <div className="offer-product-about">
        <h5 className='mb-2'><Link to='/catalog/category/product'>Краска штемпельная на водной основе цвет ЖЕЛТЫЙ</Link></h5>
        {
          (!isMobileLG) &&
          <>
            <button type='button' className='d-flex align-items-center'>
              <span>Показать ещё</span>
              <IoChevronDownOutline className='fs-08 ms-2'/>
            </button>
          </>
        }
      </div>
      <div className="offer-product-price">
        <div className='d-flex flex-column flex-lg-row-reverse justify-content-end align-items-lg-center mb-lg-2'>
          <div className='fw-5 ms-lg-3'>650 ₽</div>
          <div className='gray fs-09 text-decoration-line-through'>650</div>
        </div>
        <button type='button' className='btn-2'>В корзину</button>
        <button type='button' className='d-none d-lg-flex fs-09 mt-2'>в избранное</button>
      </div>
    </div>
  );
};

export default OfferProduct;