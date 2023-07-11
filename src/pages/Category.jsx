import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavBreadcrumbs from '../components/utils/NavBreadcrumbs';
import ProductCard from '../components/ProductCard';
import NavPagination from '../components/NavPagination';
import SelectImitation from '../components/utils/SelectImitation';
import Filter from '../components/Filter';
import CategoryCard from '../components/CategoryCard';

import IconGrid from '../components/svgs/IconGrid';
import IconRows from '../components/svgs/IconRows';
import IconFilter from '../components/svgs/IconFilter';
import DeliveryInfo from '../assets/imgs/delivery-info.jpg';

import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Category = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className='inner'>
      <Container>
        <NavBreadcrumbs/>
      </Container>

      <Container className='position-relative mb-md-5'>
        <Swiper
          className='category-slider'
          modules={[Navigation]}
          loop={true}
          spaceBetween={16}
          slidesPerView={4}
          navigation
          breakpoints={{
            992: {
              spaceBetween: 16,
              slidesPerView: 5,
            },
            1200: {
              spaceBetween: 16,
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            <CategoryCard/>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard/>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard/>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard/>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard/>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard/>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard/>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard/>
          </SwiperSlide>
        </Swiper>
      </Container>

      <section className='sec-6 mb-4 mb-md-5'>
        <Container>
          <h1 className='inner'>Печати для ООО</h1>
          <Row className='gx-5'>
            <Col lg={3}>
              <Offcanvas className="offcanvas-filter" show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Body>
                  <Filter onClose={handleClose}/>
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
            <Col lg={9}>
              <div className='d-md-flex justify-content-between align-items-center mb-4'>
                <Swiper
                  modules={[FreeMode]}
                  className='params-slider'
                  spaceBetween={10}
                  slidesPerView={'auto'}
                >
                  <SwiperSlide>Подкатегория</SwiperSlide>
                  <SwiperSlide>Подкатегория</SwiperSlide>
                  <SwiperSlide>Подкатегория</SwiperSlide>
                </Swiper>
                <div className="d-flex align-items-center justify-content-between">
                  <SelectImitation
                    boxClass={'flex-1'}
                    optionsArr={[
                      {
                        value: 1,
                        label: 'Рекомендуемые',
                        defaultChecked: true,
                      },
                      {
                        value: 2,
                        label: 'Сначала дешевые',
                        defaultChecked: false,
                      },
                      {
                        value: 3,
                        label: 'Сначала дорогие',
                        defaultChecked: false,
                      },
                    ]}
                  />

                  <button type='button' className='w-fit d-flex d-lg-none input p-2 ms-3 ms-sm-4' onClick={handleShow}>
                    <IconFilter className="dark-gray fs-15"/>
                  </button>

                  <div className='toggle-view d-flex d-md-none ms-3 ms-sm-4'>
                    <button type='button' className='active'>
                      <IconGrid/>
                    </button>
                    <button type='button'>
                      <IconRows/>
                    </button>
                  </div>
                </div>
              </div>

              <Row xs={2} sm={3} xl={4} className='g-4 g-md-5'>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
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

              <img src={DeliveryInfo} alt="бесплатная доставка" className='img-fluid rounded-radius my-4 my-md-5'/>

              <Row xs={2} sm={3} xl={4} className='g-4 g-md-5'>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
                <Col>
                  <ProductCard/>
                </Col>
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

              <NavPagination/>

              <div className="mt-5 pt-lg-5">
                <h2 className='text-start px-sm-4'>Печати для ООО</h2>
                <div className="lh-15 px-sm-4">
                  <p>Решили купить печать ООО в Казани? Вы там где нужно!</p>
                  <p>ООО «ВАША ПЕЧАТЬ» предоставляет услуги по изготовлению печатей.</p>
                  <p>Для того, чтобы заказать печать для ООО необходимы документы:</p>
                  <ul>
                    <li>Свидетельство ИНН организации</li>
                    <li>Устав (1,2 страницы)</li>
                  </ul>
                  <button type='button' className='color-2 mt-4'>показать полностью</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Category;