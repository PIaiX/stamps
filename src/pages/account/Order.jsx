import React from 'react';
import {Link} from 'react-router-dom';
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OrderItem from '../../components/OrderItem';
import ReturnLink from '../../components/utils/ReturnLink';

const Order = () => {
  return (
    <section >
      <div className="d-flex align-items-center mb-4">
        <ReturnLink link={"/account/orders"} className="mb-0"/>
        <h5 className='fw-6 mb-0 ms-4'>Заказ № 3471</h5>
      </div>

      <Row>
        <Col lg={8} className='mb-4 mb-lg-0'>
          <ul className='order-list'>
            <li><OrderItem/></li>
            <li><OrderItem/></li>
            <li><OrderItem/></li>
          </ul>
        </Col>
        <Col lg={4}>
          <div className="box">
            <div className="p-2 p-xl-3">
              <p className='fs-09 d-flex align-items-center mb-3'>
                <span>Оформлен</span>
                <span className='ms-3'>10:00 12&nbsp;Авг&nbsp;2023</span>
              </p>
              <div className='bg-lightgreen green fs-09 fw-5 rounded-3 py-1 px-2 w-fit mb-3'>Готовится</div>
              <div className='color-2-light-bg color-2 fs-09 fw-5 rounded-3 py-1 px-2 w-fit mb-3'>В доставке</div>
              <div className='order-card-delivery'>Доставка <span className='main-color fs-09 ms-1'>●</span></div>
              <address className='d-block fs-09 dark-gray'>г. Казань, ул. Сахарная, д. 3а, кв 168</address>

              <div className="mt-4 mt-xxl-5 mb-1"><span className='main-color fs-09 me-1'>●</span> Комментарий к заказу</div>
              <textarea disabled className='fs-09 p-2' value={'Перезвоните пожалуйста, уточню детали'} rows={3}></textarea>

              <div className="fs-09 d-flex justify-content-between align-items-center mt-3">
                <p>Стоимость товаров</p>
                <p>20 960 ₽</p>
              </div>
              <div className="fs-09 dark-gray d-flex justify-content-between mt-2">
                <p>Скидка</p>
                <p>199 ₽</p>
              </div>
              <div className="fs-09 d-flex justify-content-between mt-2">
                <p>Доставка</p>
                <p className="color-2">бесплатно</p>
              </div>
            </div>
            <hr className='my-1'/>
            <div className="p-2 p-xl-3">
              <div className="d-flex justify-content-between fw-6">
                <p>Итоговая сумма</p>
                <p>1 880 ₽</p>
              </div>
            </div>
            <div className='bg-lightgreen green fw-5 w-100 justify-content-start p-2 px-xl-3'>Списано 33 бонуса</div>
            <div className="p-2 p-xl-3">
              <p className="fs-09 color-2">34 бонуса будут начислены за этот заказ</p>
              <button type='submit' disabled className='btn-green w-100 mt-3'>Отменить заказ</button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Order;