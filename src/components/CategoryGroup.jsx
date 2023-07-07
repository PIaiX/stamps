import React from 'react';
import { HiOutlineAdjustmentsHorizontal, HiOutlineMagnifyingGlass, HiOutlineBars3 } from "react-icons/hi2";
import SelectImitation from './utils/SelectImitation';
import ProductCard from './ProductCard';

const CategoryGroup = () => {
  return (
    <div className='CategoryGroup'>
      <div className='filter-line'>
          <h4 className='title'>Роллы</h4>
          <ul className='subcategories-list'>
            <li>
              <button type='button' className='btn-90 rounded-pill'>Фирменные</button>
            </li>
            <li>
              <button type='button' className='btn-90 rounded-pill active'>Запечённые</button>
            </li>
            <li>
              <button type='button' className='btn-90 rounded-pill'>Классические</button>
            </li>
            <li>
              <button type='button' className='btn-90 rounded-pill'>В темпуре</button>
            </li>
          </ul>
          <button type='button' className='btn-search btn-90 rounded-circle'>
            <HiOutlineMagnifyingGlass/>
          </button>
          <button type='button' className='btn-filter btn-10 rounded-circle'>
            <HiOutlineAdjustmentsHorizontal/>
          </button>
          <SelectImitation 
            btnClass={'rounded-pill'}
            imgClass={'round'}
            optionsArr={[
              {
                value: 1,
                label: 'По увеличению',
                defaultChecked: true,
              },
              {
                value: 2,
                label: 'По уменьшению',
                defaultChecked: false,
              }
            ]}
          />
          <button type='button' className='btn-subcategories btn-10 rounded-circle'>
            <HiOutlineBars3/>
          </button>
        </div>
        <ul className='list-unstyled row row-cols-2 row-cols-sm-3 row-cols-lg-4 gx-4 gx-xl-5 gy-5'>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
          <li>
            <ProductCard/>
          </li>
        </ul>
    </div>
  );
};

export default CategoryGroup;