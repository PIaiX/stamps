import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../components/ProductCard';
import SelectImitation from '../components/utils/SelectImitation';
import NavBreadcrumbs from '../components/utils/NavBreadcrumbs';
import CountInput from '../components/utils/CountInput';
import BtnFav from '../components/utils/BtnFav';
// swiper
import { Navigation, Thumbs, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Product = () => {
  const [featuresShow, setFeaturesShow] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <main className='inner'>
      <Container>
        <NavBreadcrumbs/>

        <form className='productPage mb-3 mb-sm-4 mb-md-5'>
          <Row className='gx-4 gx-xxl-5'>
            <Col xs={12} lg={10} xl={9}>
              <Row md={2}>
                <Col>
                  <div className="productPage-photo">
                    <Swiper
                      className="thumbSlider"
                      modules={[Thumbs, FreeMode]}
                      watchSlidesProgress
                      onSwiper={setThumbsSwiper}
                      direction="vertical"
                      loop={true}
                      spaceBetween={20}
                      slidesPerView={'auto'}
                      freeMode={true}
                    >
                      <SwiperSlide>
                        <img src="imgs/img5.jpg" alt="Ручная печать для организации" className='productPage-img'/>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="imgs/img1.jpg" alt="Ручная печать для организации" className='productPage-img'/>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="imgs/replacement-mini.png" alt="Ручная печать для организации" className='productPage-img'/>
                      </SwiperSlide>
                    </Swiper>
                    <Swiper 
                      className="mainSlider"
                      modules={[Thumbs]} 
                      loop={true}
                      spaceBetween={20}
                      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    >
                      <SwiperSlide>
                        <img src="imgs/img5.jpg" alt="Ручная печать для организации" className='productPage-img'/>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="imgs/img1.jpg" alt="Ручная печать для организации" className='productPage-img'/>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="imgs/replacement-mini.png" alt="Ручная печать для организации" className='productPage-img'/>
                      </SwiperSlide>
                    </Swiper>
                    <BtnFav/>
                  </div>
                </Col>
                <Col>
                  <h1 className='inner mb-3'>Ручная печать для организации</h1>

                  <p className='dark-gray fs-08'>В цену включено клише из резины</p>

                  <form action="" className='mt-4 mt-md-5'>
                    <SelectImitation 
                      boxClass={"mb-3"}
                      placeholder={'Размер подушечки'}
                      optionsArr={[
                        {
                          value: 1,
                          label: 'Размер подушечки 1',
                          defaultChecked: false,
                        },
                        {
                          value: 2,
                          label: 'Размер подушечки 2',
                          defaultChecked: false,
                        },
                        {
                          value: 3,
                          label: 'Размер подушечки 3',
                          defaultChecked: false,
                        },
                      ]}
                    />
                    <SelectImitation 
                      placeholder={'Срочность исполнения'}
                      optionsArr={[
                        {
                          value: 1,
                          label: 'Срочность исполнения 1',
                          defaultChecked: false,
                        },
                        {
                          value: 2,
                          label: 'Срочность исполнения 2',
                          defaultChecked: false,
                        },
                        {
                          value: 3,
                          label: 'Срочность исполнения 3',
                          defaultChecked: false,
                        },
                      ]}
                    />

                    <div className='productPage-price mt-5'>
                      <div className='order-1 me-3 me-md-0'>
                        <div className='fs-12 fw-5'>650 ₽</div>
                        <div className='gray fs-09 text-decoration-line-through'> 650 </div>
                      </div>
                      <button type='button' className='order-3 order-xl-2 btn-1 py-2 px-3 ms-3 ms-md-0 ms-xl-2'>Заказать</button>
                      <CountInput dis={false} className={'order-2 order-xl-3'}/>
                    </div>
                  </form>
                </Col>
              </Row>
            </Col>
          </Row>
        </form>

        <section className='mb-6'>
          <ul className="tabs">
            <li>
              <button 
                type='button'
                onClick={()=>setFeaturesShow(false)}
                className={(featuresShow)?'':'active'}
              >Описание</button>
            </li>
            <li>
              <button 
                type='button'
                onClick={()=>setFeaturesShow(true)}
                className={(featuresShow)?'active':''}
              >Характеристики
              </button>
            </li>
          </ul>
          {
            (featuresShow)
            ? <ul className='features px-2 py-3 p-sm-4'>
              <li>
                <div>Тип</div>
                <div>Печать</div>
              </li>
              <li>
                <div>Формат</div>
                <div>Ручная</div>
              </li>
              <li>
                <div>Особенности</div>
                <div>Подушка в комплекте</div>
              </li>
            </ul>
            : <div className="p-2 p-sm-4 lh-15">
              <p>Печать для организации на ручной пластиковой оснастке с закручивающейся крышкой — доступный и простой вариант, для получения чёткого оттиска. Оснастка выполнена из пластика чёрного цвета. В стоимость изделия входит клише из резины изготовленное путём лазерной гравировки. Для использования печати потребуется настольная штемпельная подушка.</p>
              <p>Вы так же можете рассмотреть варианты готовых печатей на автоматической оснастке или оснастке карманного типа со встроенной штемпельной подушкой в разделе «Вас может заинтересовать».</p>
            </div>
          }
        </section>

        <section className='mb-6'>
          <h5>Вам пригодится</h5>
          <div className="position-relative">
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
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Product;