import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiOutlineShoppingBag, HiOutlineMapPin, HiOutlineStar, HiOutlineCreditCard, HiOutlineBellAlert, HiOutlineBolt } from "react-icons/hi2";
import SettingsIcon from '../../components/svgs/SettingsIcon';
import Support from '../../components/svgs/Support';
import ReplacementMini from '../../assets/imgs/replacement-mini.png';

const AccountMenu = (props) => {
  return (
    <div className='account-menu'>
       <div className="box w-100 h-100 d-flex justify-content-between align-items-center p-4 mb-3">
        <div>
          <div className='d-flex align-items-center'>
            <span className="fw-5">Элли</span>
            <span className='main-color mx-3'>●</span>
            <a href="tel:+79198563658">+7 919 856-36-58</a>
          </div>
          <div className='mt-2 dark-gray'>
            <a href="mailto:GreatOZ@mail.com">GreatOZ@mail.com</a>
          </div>
        </div>
        <Link to='/account/settings' className='dark-gray ms-4'>
          <SettingsIcon/>
        </Link>
      </div>
      <ul className='list-unstyled row row-cols-3 gx-2 gx-sm-3 gx-md-4 mb-3'>
        <li>
          <div className="box color-2 text-center p-2 p-sm-3 h-100">
            <div className='fs-18 mb-sm-1'>1002</div>
            <div className='fw-6'>Бонуса</div>
          </div>
        </li>
        <li>
          <NavLink to="orders" className="box-blue d-flex flex-column align-items-center justify-content-center p-2 p-sm-3 h-100">
            <HiOutlineShoppingBag className='color-2 fs-18 mb-1 mb-sm-2'/>
            <div className='color-2 fw-6'>Заказы</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="addresses" className="box-blue d-flex flex-column align-items-center justify-content-center p-2 p-sm-3 h-100">
            <HiOutlineMapPin className='color-2 fs-18 mb-1 mb-sm-2'/>
            <div className='color-2 fw-6'>Адреса</div>
          </NavLink>
        </li>
      </ul>
      <div className="img-block mb-3">
        <img src={ReplacementMini} alt="ReplacementMini" />
      </div>
      <div className="gradient-block mb-3"></div>
      <nav className='mb-3'>
        <ul>
          <li>
            <NavLink to="notifications">
              <HiOutlineBellAlert/>
              <div>Уведомления</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="offers">
              <HiOutlineBolt/>
              <div>Акции и промокоды</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="bonus">
              <HiOutlineStar/>
              <div>Бонусная программа</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="payment">
              <HiOutlineCreditCard/>
              <div>Способы оплаты</div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link to="support" className='btn-lightgreen fs-12 w-100 rounded-3'>
        <Support className='fs-15 me-2'/>
        <div>Тех. подержка</div>
      </Link>
    </div>
  );
};

export default AccountMenu;