import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReturnLink from '../../components/utils/ReturnLink';

const EditAddress = () => {
  return (
    <section className='addresses'>
      <div className="d-flex align-items-center mb-4">
        <ReturnLink className="mb-0" link={'/account/addresses'}/>
        <h5 className='ms-4 mb-0'>Изменение адреса</h5>
      </div>
      <form action="">
        <Row className='gx-3 gy-4'>
          <Col md={6} xl={7}>
            <div className="input-labeled">
              <span>Улица</span>
              <input type="text" placeholder='Улица' defaultValue={'Эверт-Колокольцевой'}/>
            </div>
          </Col>
          <Col md={6} xl={5}>
            <Row className='gx-2 gx-sm-3'>
              <Col xs={4}>
                <div className="input-labeled">
                  <span>Дом</span>
                  <input type="text" placeholder='Дом' defaultValue={'12'}/>
                </div>
              </Col>
              <Col xs={4}>
                <div className="input-labeled">
                  <span>Корпус</span>
                  <input type="text" placeholder='Корпус'/>
                </div>
              </Col>
              <Col xs={4}>
                <div className="input-labeled">
                  <span>Подъезд</span>
                  <input type="text" placeholder='Подъезд'/>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6} xl={5}>
            <Row className='gx-2 gx-sm-3'>
              <Col xs={4}>
                <div className="input-labeled">
                  <span>Квартира</span>
                  <input type="text" placeholder='Квартира' defaultValue={'201'}/>
                </div>
              </Col>
              <Col xs={4}>
                <div className="input-labeled">
                  <span>Этаж</span>
                  <input type="text" placeholder='Этаж'/>
                </div>
              </Col>
              <Col xs={4}>
                <div className="input-labeled">
                  <span>Домофон</span>
                  <input type="text" placeholder='Домофон'/>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6} xl={7} className='d-flex flex-column justify-content-end'>
            <button type='submit' className='btn-green w-xs-100 ms-xxl-5'>Сохранить адрес</button>
          </Col>
        </Row>
      </form>
    </section>
  );
};

export default EditAddress;