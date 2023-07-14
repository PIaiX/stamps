import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMapPin, HiOutlineStar, HiOutlineBellAlert, HiOutlineBolt, HiOutlineLifebuoy } from "react-icons/hi2";
import CartIcon from '../../components/svgs/CartIcon';
import Support from '../../components/svgs/Support';

const AccountMenu = (props) => {
  return (
    <nav className='account-nav'>
      <ul>
        <li>
          <NavLink to="orders">
            <CartIcon/>
            <div>Заказы</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="addresses">
            <HiOutlineMapPin/>
            <div>Адреса</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="bonus">
            <HiOutlineStar/>
            <div>Бонусы</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="support">
            <Support/>
            <div>Тех. подержка</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="notifications">
            <HiOutlineBellAlert/>
            <div>Уведомления</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="offers">
            <HiOutlineBolt/>
            <div>Акции</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AccountMenu;