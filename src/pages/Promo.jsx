import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offer from '../components/Offer';
import ProductCardMini from '../components/ProductCardMini';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Promo = () => {
  return (
    <main className='inner'>
      <section className='sec-8 mb-5'>
        <Container>
          <Row xs={2} lg={3} className='g-2 g-sm-3 g-md-4 g-lg-3 g-xl-4'>
            <Col>
              <Offer blackText={false} img={"imgs/offers/offer1.jpg"} title={'Весна пришла'} subtitle={'А с ней новые вкусы роллов!'}/>
            </Col>
            <Col>
              <Offer blackText={false} img={"imgs/offers/offer2.jpg"} title={'Пицца «Гаваи»'} subtitle={'Улётный микс из курицы и ананаса'}/>
            </Col>
            <Col>
              <Offer blackText={true} img={"imgs/offers/offer3.jpg"} title={'Свежих ягод много бывает'} subtitle={'Попробуйте наш фирменный тарт — мы добавили в него ещё больше клубники!'}/>
            </Col>
            <Col>
              <Offer blackText={false} img={"imgs/offers/offer4.jpg"} title={'Акция «Счастливые часы»'} subtitle={'Скидка 20% на весь ассортимент японской кухни*'}/>
            </Col>
            <Col>
              <Offer blackText={false} img={"imgs/offers/offer2.jpg"} title={'Пицца «Гаваи»'} subtitle={'Улётный микс из курицы и ананаса'}/>
            </Col>
            <Col>
              <Offer blackText={true} img={"imgs/offers/offer3.jpg"} title={'Свежих ягод много бывает'} subtitle={'Попробуйте наш фирменный тарт — мы добавили в него ещё больше клубники!'}/>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-8 mb-5'>
        <Container>
          <h5 className='fs-12'>Обратите внимание</h5>
          <Swiper
            className='product-slider'
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            speed={750}
            navigation
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 10,
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

export default Promo;