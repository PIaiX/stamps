import React, {useState} from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";

const OrderItem = () => {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <div className='order-item'>
      <img src="imgs/img1.jpg" alt="Штемпельная краска Trodat (28ml)" />
      <div className='text'>
        <h5 className='mb-0'>Штемпельная краска Trodat (28ml)</h5>
      </div>
      <div className="show" onClick={()=>setShowExtra(!showExtra)}>
        <button type='button' className='d-flex align-items-center'>
          <span>Показать ещё</span>
          {
            (showExtra)
            ? <HiOutlineChevronUp className='ms-2'/>
            : <HiOutlineChevronDown className='ms-2'/>
          }
        </button>
      </div>
      <div className='quantity'>
        <div className="input w-50p py-1 px-2 rounded-4 text-center">x2</div>
      </div>
      <div className='price'>640&nbsp;₽</div>
      {
        (showExtra) &&
        <div className="extra">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam ea reprehenderit quia possimus laboriosam officia fugit saepe, consectetur reiciendis suscipit sit incidunt! Officia, cum fuga? Sequi culpa quaerat amet?</p>
        </div>
      }
    </div>
  );
};

export default OrderItem;