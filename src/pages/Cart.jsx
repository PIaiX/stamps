import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Gifts from '../components/utils/Gifts';
import { RxCross1, RxTrash } from "react-icons/rx";
import CartItem from '../components/CartItem';

// swiper
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from '../components/ProductCard';
import ReturnLink from '../components/utils/ReturnLink';

const Cart = () => {
  return (
    <main className='inner'>
      <Container>
        <div className="d-flex align-items-center mb-4">
          <ReturnLink link="/" className="mb-0"/>
          <h1 className='text-start ms-4 mb-0'>Вы добавили 3 товара</h1>
        </div>
        <form className='cart'>
          <Row className='g-4 g-xxl-5'>
            <Col xs={12} lg={8}>
              <div className="cart-filter">
                <label>
                  <input type="checkbox"/>
                  <span className='fs-11 ms-2'>Все <span className='d-none d-sm-inline'>товары</span></span>
                </label>
                <button type='button' className='d-flex align-items-center dark-gray ms-auto'>
                  <RxTrash className='fs-14 me-1 me-sm-2'/>
                  <span className='d-md-none'>Удалить</span>
                  <span className='d-none d-md-inline fs-09'>Удалить выбранные</span>
                </button>
                <button type='button' className='btn-gray ms-4 ms-sm-5'>Очистить</button>
              </div>

              <ul className='list-unstyled'>
                <li><CartItem/></li>
                <li><CartItem/></li>
                <li><CartItem/></li>
                <li><CartItem/></li>
              </ul>
            </Col>
            <Col xs={12} lg={4}>
              <div className="cart-box">
                <div className='mb-2'>Комментарий к заказу</div>
                <textarea rows="3" defaultValue={'Уберите, пожалуйста, лук'} className='mb-4'></textarea>
              
                <div className='fs-11 mb-1'>Промокод</div>
                <fieldset className='promoCode mb-4'>
                  <input type="text" />
                  <button type='button' className='btn-2'>Применить</button>
                  <button type='button' className='clear ms-2'>
                    <RxCross1/>
                  </button>
                </fieldset>

                <div className="d-flex justify-content-between my-2">
                  <span>Стоимость товаров</span>
                  <span>1 880 ₽</span>
                </div>
                <div className="d-flex justify-content-between my-2">
                  <span>Доставка</span>
                  <span className='color-2 fw-5'>бесплатно</span>
                </div>
                <Gifts/>
                <hr className='my-3'/>
                <div className="d-flex justify-content-between mb-4">
                  <span className='fw-5 fs-11'>Итоговая сумма</span>
                  <span className='fw-5'>1 880 ₽</span>
                </div>

                <div className="priceFixed">
                  <div className='d-md-none'>
                    <div className="fs-12">20 960 ₽</div>
                    <div className='fs-09 dark-gray'>● 5 товаров</div>
                  </div>
                  <Link to='/checkout' className='btn-1 mt-md-3 w-100 flex-1 ms-2 ms-sm-4 ms-md-0'>
                    <span className='fw-4'>Заказать</span>
                  </Link>
                </div>
                
                <div className='text-center fw-5 fs-09 w-100 rounded-2 p-2 color-2 color-2-light-bg mt-3'>34 бонуса будут начислены за этот заказ</div>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
      <section className='mb-6'>
        <Container>
          <h5>Добавьте к заказу</h5>
        </Container>
        <Container className='position-relative'>
          <Swiper
            className="position-static"
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={2}
            navigation
            breakpoints={{
              576: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
    </main>
  );
};

export default Cart;