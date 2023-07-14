import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BankCard from '../../components/utils/BankCard';
import { HiOutlinePlus } from "react-icons/hi2";
import ReturnLink from '../../components/utils/ReturnLink';

const Payment = () => {
  return (
    <section>
      <div className="d-flex align-items-center mb-4">
        <ReturnLink className="mb-0 me-4 d-lg-none" link={'/account'}/>
        <h5 className='mb-0'>Мои карты</h5>
      </div>
      <Row xs={2} sm={2} md={3} xxl={4} className='gx-2 gy-4'>
        <Col>
          <BankCard />
        </Col>
        <Col>
          <BankCard />
        </Col>
        <Col>
          <BankCard />
        </Col>
        <Col>
          <BankCard />
        </Col>
        <Col>
          <BankCard />
        </Col>
        <Col>
          <button type='button' className='w-100 h-100 btn-21 rounded-3 flex-column'>
            <HiOutlinePlus className='fs-25'/>
            <div className='fs-11 mt-2'>Добавить новую карту</div>
          </button>
        </Col>
      </Row>
    </section>
  );
};

export default Payment;