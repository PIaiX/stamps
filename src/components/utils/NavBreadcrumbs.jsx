import React from 'react';
import {Link} from 'react-router-dom';
import { IoChevronBackCircleOutline, IoChevronForwardOutline } from "react-icons/io5";

const NavBreadcrumbs = () => {
  return (
    <nav className="breadcrumbs">
      <Link to="/" className='return'>
        <IoChevronBackCircleOutline/>
      </Link>
      <ul>
        <li>
          <Link to="/">
            <IoChevronForwardOutline/>
            <span>Главная</span>
          </Link>
        </li>
        <li>
          <Link to="/catalog">
            <IoChevronForwardOutline/>
            <span>Каталог</span>
          </Link>
        </li>
        <li>
          <Link to="/catalog/category">
            <IoChevronForwardOutline/>
            <span>Категория</span>
          </Link>
        </li>
        <li>
          <Link to="/catalog/category.product">
            <IoChevronForwardOutline/>
            <span>Товар</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBreadcrumbs;