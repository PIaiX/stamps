import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountInput from '../components/utils/CountInput';
import CheckoutProduct from '../components/CheckoutProduct';
import ReturnLink from '../components/utils/ReturnLink';
import {Link} from 'react-router-dom';

const Checkout = () => {
  const [isDelivery, setIsDelivery] = useState(false);

  return (
    <main className='inner'>
      <Container>
        <div className="d-flex align-items-center mb-4 mb-xl-5">
          <ReturnLink link="/cart" className="mb-0"/>
          <h1 className='text-start ms-4 mb-0'>Оформление заказа</h1>
        </div>
        <form className='cart mb-6'>
          <Row className='g-4 g-xxl-5'>
            <Col xs={12} md={6} lg={7} xl={8}>
              <Row xs={1} xl={3} className='g-3 mb-4 mb-xl-5'>
                <Col>
                  <div className="input-labeled">
                    <span>Получатель</span>
                    <input type="text" placeholder='Имя' />
                  </div>
                </Col>
                <Col>
                  <div className="input-labeled">
                    <span>Номер телефона</span>
                    <input type="tel" placeholder='+7- ___-___-__-__' />
                  </div>
                </Col>
                <Col>
                  <p className="fs-09 fw-5">Способ получения</p>
                  <ul className='inputGroup fs-09'>
                    <li>
                      <label>
                        <input type="radio" name='param1' onClick={()=>setIsDelivery(true)}/>
                        <div className='text'>Доставка</div>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="radio" defaultChecked={true} name='param1' onClick={()=>setIsDelivery(false)}/>
                        <div className='text'>Самовывоз</div>
                      </label>
                    </li>
                  </ul>
                </Col>
              </Row>
              {
                (isDelivery)
                ? <Row xs={1} xl={2} className='g-3 mb-5'>
                    <Col>
                      <div className="input-labeled">
                        <span>Улица</span>
                        <input type="text" placeholder='Улица' />
                      </div>
                    </Col>
                    <Col>
                      <Row xs={3} className='gx-2 gx-sm-3'>
                        <Col>
                          <div className="input-labeled">
                            <span>Дом</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                        <Col>
                          <div className="input-labeled">
                            <span>Корпус</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                        <Col>
                          <div className="input-labeled">
                            <span>Подъезд</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row xs={3} className='gx-2 gx-sm-3'>
                        <Col>
                          <div className="input-labeled">
                            <span>Этаж</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                        <Col>
                          <div className="input-labeled">
                            <span>Квартира</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                        <Col>
                          <div className="input-labeled">
                            <span>Домофон</span>
                            <input type="text" placeholder='0' />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                : <Row xs={1} xl={2} className='g-4 g-xxl-5 mb-5'>
                  <Col>
                    <label className='mb-4'>
                      <input type="radio" name='address' defaultChecked={true}/>
                      <span>улица А. Губкина, д. 17</span>
                    </label>
                    <p className="fs-09 color-2 mb-2">Режим работы</p>
                    <p className="fs-09">
                      С 10:00 до 16:00 понедельник-пятница.
                      <br/>Суббота,воскресенье-выходные
                    </p>
                  </Col>
                  <Col>
                    <label className='mb-4'>
                      <input type="radio" name='address'/>
                      <span>Проспект Победы 156/26</span>
                    </label>
                    <p className="fs-09 color-2 mb-2">Режим работы</p>
                    <p className="fs-09">
                      С 10:00 до 16:00 понедельник-пятница.
                      <br/>Суббота,воскресенье-выходные
                    </p>
                  </Col>
                </Row>
              }
              
              <div className="box-gray">
                <h5>Ваш заказ</h5>
                <ul className='list-unstyled'>
                  <li className='mb-3'><CheckoutProduct/></li>
                  <li className='mb-3'><CheckoutProduct/></li>
                  <li className='mb-3'><CheckoutProduct/></li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6} lg={5} xl={4}>
              <div className="cart-box">
                <div className='mb-2'>Комментарий к заказу</div>
                <textarea rows="3" defaultValue={'Перезвоните пожалуйста, уточню детали'} className='mb-4'></textarea>

                <div className="d-flex justify-content-between my-2">
                  <span>Стоимость товаров</span>
                  <span>20 960 ₽</span>
                </div>
                <div className="d-flex justify-content-between my-2">
                  <span>Доставка</span>
                  <span className='color-2 fw-5'>бесплатно</span>
                </div>
                <hr className='my-3'/>
                <div className="d-flex justify-content-between mb-4">
                  <span className='fw-5 fs-11'>Итоговая сумма</span>
                  <span className='fw-5'>20 960 ₽</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>Доступно 354 бонуса</div>
                  <label>
                    <span className='me-1'>Списать</span>
                    <input type="checkbox" role="switch"/>
                  </label>
                </div>
                <div className="d-flex justify-content-start align-items-center">
                  <input type="text" placeholder='0' defaultValue={300} className='w-100p py-2 px-3'/>
                  <button type='button' className='btn-21 fs-09 ms-2'>списать все бонусы</button>
                </div>

                <div className="priceFixed">
                  <div className='d-md-none'>
                    <div className="fs-12">20 960 ₽</div>
                    <div className='fs-09 dark-gray'>● 5 товаров</div>
                  </div>
                  <Link to='accepted' className='btn-1 mt-md-3 w-100 flex-1 ms-2 ms-sm-4 ms-md-0'>
                    <span className='fw-4'>Заказать</span>
                  </Link>
                </div>
                
                <div className='text-center fw-5 fs-09 w-100 rounded-2 p-2 color-2 color-2-light-bg mt-3'>34 бонуса будут начислены за этот заказ</div>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </main>
  );
};

export default Checkout;