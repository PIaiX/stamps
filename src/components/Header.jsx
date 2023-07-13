import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';
import Logo from '../assets/imgs/logo.png';
import MenuPhone from './svgs/MenuPhone';
import MenuDelivery from './svgs/MenuDelivery';
import MenuVacancies from './svgs/MenuVacancies';
import MenuDocs from './svgs/MenuDocs';
import MenuArticles from './svgs/MenuArticles';
import MenuSale from './svgs/MenuSale';
import YooApp from './svgs/YooApp';
import SearchForm from './forms/SearchForm';
import CartIcon from './svgs/CartIcon';
import HeartIcon from './svgs/HeartIcon';
import { IoCloseOutline, IoChevronDownOutline } from "react-icons/io5";
import { PiPhoneLight } from "react-icons/pi";
import Dots from './svgs/Dots';
import ReplacementMini from '../assets/imgs/replacement-mini.png';

const Header = () => {
  const isMobileMD = useIsMobile('767px');
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header>
        <Container className='h-100'>
          <nav className='h-100'>
            <Link to='/' className='logo'>
              <img src={Logo} alt="yoo.app"/>
              <h6 className='mb-0 ms-2'>Магазин печатей <br/>и штампов</h6>
            </Link>
            {
              (isMobileMD) 
              ? <button type='button' onClick={()=>setShowMenu(!showMenu)} className='btn-menu'>
                {
                  (showMenu)
                  ? <IoCloseOutline/>
                  : <Dots/>
                }
              </button>
              : <>
                <Link to='/catalog' className='btn-1'>Каталог</Link>
                <ul className='text-menu'>
                  <li>
                    <Link to='/'>О нас</Link>
                  </li>
                  <li className='ms-3 ms-lg-4'>
                    <Link to='/drafts'>Эскизы</Link>
                  </li>
                  <li className='ms-3 ms-lg-4'>
                    <Dropdown>
                      <Dropdown.Toggle as="a">
                        <IoChevronDownOutline className='fs-12'/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link to='/promo'>Акции</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to='/articles'>Новости</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to='/contacts'>Контакты</Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
                <SearchForm/>
                <a href="tel:+7987987-78-78" className='phone'>
                  <span className='d-none d-lg-block'>+7 987 987-78-78</span>
                  <PiPhoneLight className='d-lg-none'/>
                </a>
                <ul className='icons-menu'>
                  <li>
                    <Link to="/cart" className='position-relative'>
                      <CartIcon/>
                      <span className="badge">2</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <HeartIcon/>
                    </Link>
                  </li>
                </ul>
                <Link to="/login" className='btn-2'>Войти</Link>
              </>
            }
          </nav>
        </Container>
      </header>

      <Offcanvas className="offcanvas-menu" show={showMenu} onHide={()=>setShowMenu(false)} placement={'end'}>
        <Offcanvas.Body>
          <Link to="/promo">
            <img src={ReplacementMini} alt="" className='menu-offer'/>
          </Link>
          <Container className='h-100 px-0' onClick={()=>setShowMenu(false)}>
            <div className='px-4'>
              <nav>
                <ul>
                  <li>
                    <Link to='/contacts'>
                      <MenuPhone/>
                      <span>Контакты</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <MenuDelivery/>
                      <span>Оплата и доставка</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/articles'>
                      <MenuArticles/>
                      <span>Новости</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/promo'>
                      <MenuSale/>
                      <span>Акции</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <MenuVacancies/>
                      <span>Вакансии</span>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <MenuDocs/>
                      <span>Политика конфиденциальности</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <p className="gray text-center mt-4 mt-md-5">Разработано на платформе</p>
              <p className='text-center mt-2'><YooApp/></p>
            </div>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;