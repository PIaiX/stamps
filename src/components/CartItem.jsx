import React from 'react';
import BtnFav from './utils/BtnFav';
import { IoCaretDownOutline } from "react-icons/io5";
import CountInput from './utils/CountInput';

const CartItem = () => {
  return (
    <div className='cart-item'>
      <div className="left">
        <input type="checkbox" className='me-1 me-sm-3'/>
        <img src="imgs/img1.jpg" alt="Штемпельная краска Trodat (28ml)" />
        <div className='text'>
          <h5>Штемпельная краска Trodat (28ml)</h5>
          {/* <span className="tag">Подарок</span> */}
          <button type='button' className='d-flex align-items-center'>
            <span>Показать ещё</span>
            <IoCaretDownOutline className='fs-08 ms-2'/>
          </button>
        </div>
      </div>
      <div className="right">
        <div className='fw-5'>640 ₽</div>
        <CountInput className="my-2" dis={false}/>
        <BtnFav checked={false}/>
      </div>
    </div>
  );
};

export default CartItem;