import React from 'react';
import Replacement from '../assets/imgs/replacement.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// swiper
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCardMini from '../components/ProductCardMini';

const ArticlePage = () => {
  return (
    <main className='inner'>
      <section className='articles-single mb-6'>
        <Container>
          <img src={Replacement} alt="Заголовок новости" />
          <Row className='justify-content-between'>
            <Col md={8}>
              <h1>Заголовок новости</h1>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
              <p>Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              <img src={Replacement} alt="Заголовок новости" />
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
              <p>Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.Excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            </Col>
            <Col md={4} xl={3}>
              <h5>Вам может быть интересно</h5>
              <ul className="articles-list">
                <li>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam fermentum viverra euismod</h5>
                  <time>22 Июня, 2022</time>
                </li>
                <li>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam fermentum viverra euismod</h5>
                  <time>22 Июня, 2022</time>
                </li>
                <li>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam fermentum viverra euismod</h5>
                  <time>22 Июня, 2022</time>
                </li>
                <li>
                  <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam fermentum viverra euismod</h5>
                  <time>22 Июня, 2022</time>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='sec-6 mb-6'>
        <Container>
          <h5>Обратите внимание</h5>
        </Container>
        <Container className='position-relative'>
          <Swiper
            className='product-slider'
            modules={[Navigation, FreeMode]}
            spaceBetween={20}
            slidesPerView={'auto'}
            speed={750}
            navigation
            freeMode={true}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 10,
                freeMode: false,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCardMini/>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
    </main>
  );
};

export default ArticlePage;