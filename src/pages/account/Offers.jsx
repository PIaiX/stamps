import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../../components/ProductCard';
import useIsMobile from '../../hooks/isMobile';
import ReturnLink from '../../components/utils/ReturnLink';

const Offers = () => {
  const isMobileLG = useIsMobile('991px');

  return (
    <section>
      {
        (isMobileLG) && 
        <div className="d-flex align-items-center mb-4">
          <ReturnLink className="mb-0" link={'/account'}/>
          <h5 className='ms-4 mb-0'>Акции и промокоды</h5>
        </div>
      }
      <h5 className='fw-6'>Персональные акции</h5>
      <div className="box py-4 px-4 px-xxl-5 mb-5">
        <Row xs={1} sm={2} lg={3} className='gx-4 gx-xl-5'>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
        </Row>
      </div>
      <h5 className='fw-6'>Общие акции</h5>
      <div className="box py-4 px-4 px-xxl-5">
        <Row md={3} className='gx-4 gx-xl-5'>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Offers;