import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { HiOutlineHeart } from "react-icons/hi2";

const ProductCard = () => {
  const [isFav, setIsFav] = useState(false);

  return (
    <div className="product">
      <div className="product-img">
        <Link to='/catalog/category/product'>
          <img src="imgs/img1.jpg" alt="Штемпельная краска Trodat (28ml)"/>
        </Link>
        <button 
          type='button' 
          onClick={()=>setIsFav(!isFav)} 
          className={(isFav) ? 'btn-fav active' : 'btn-fav'}
        >
          <HiOutlineHeart/>
        </button>
      </div>
      
      <h5><Link to='/catalog/category/product'>Штемпельная краска Trodat (28ml)</Link></h5>
      
      <div className='w-xs-100 d-flex justify-content-between align-items-center'>
        <div>
          <div className='fw-5'>650 ₽</div>
          <div className='gray fs-09 text-decoration-line-through'> 650 </div>
        </div>
        <button type='button' className='btn-1 fs-09'>добавить</button>
      </div>
    </div>
  );
};

export default ProductCard;