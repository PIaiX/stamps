import React from 'react';
import ReplacementMini from '../assets/imgs/replacement-mini.png';

const CheckoutProduct = () => {
  return (
    <div className='checkoutProduct'>
      <img src="imgs/img1.jpg" alt="Штемпельная краска Trodat (28ml)"/>
      <div className='flex-1'>
        <h5>Штемпельная краска Trodat (28ml)</h5>
        <div className='d-flex align-items-center'>
          <p className='ms-auto fw-5'>1 540 ₽</p>
          <p className='checkoutProduct-count'>х1</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;