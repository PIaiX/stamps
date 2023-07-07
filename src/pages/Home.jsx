import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StoriesSection from '../components/StoriesSection';
import AppStore from '../assets/imgs/appstore.svg';
import GooglePlay from '../assets/imgs/googleplay.svg';
import Cover from '../assets/imgs/articles-cover.jpg';
import More from '../assets/imgs/more.jpg';
import Phone from '../assets/imgs/phone.png';
import Objects from '../assets/imgs/objects.png';
import CategoryCard from '../components/CategoryCard';
import Eyes from '../assets/imgs/eyes.svg';
import Paw from '../components/svgs/Paw';
import ArticleCard from '../components/ArticleCard';
import useIsMobile from '../hooks/isMobile';
import {Link} from 'react-router-dom';
import { Navigation, Pagination, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCardMini from '../components/ProductCardMini';

const Home = () => {
  const isMobileLG = useIsMobile('991px');

  return (
    <main>
      <section className='sec-1 mb-6'>
        <Swiper
          className='main-slider'
          modules={[Pagination, Autoplay]}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 15000,
          }}
        >
          <SwiperSlide>
            <Container className='position-relative'>
              <img src="imgs/slider-main/slide.jpg" alt='slide'/>
              <div className="text white">
                <h1>Изготавляем печати и штампы любой сложности в г. Казань</h1>
              </div>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container className='position-relative'>
              <img src="imgs/slider-main/slide.jpg" alt='slide'/>
              <div className="text white">
                <h1>Изготавляем печати и штампы любой сложности в г. Казань</h1>
              </div>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container className='position-relative'>
              <img src="imgs/slider-main/slide.jpg" alt='slide'/>
              <div className="text white">
                <h1>Изготавляем печати и штампы любой сложности в г. Казань</h1>
              </div>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container className='position-relative'>
              <img src="imgs/slider-main/slide.jpg" alt='slide'/>
              <div className="text white">
                <h1>Изготавляем печати и штампы любой сложности в г. Казань</h1>
              </div>
            </Container>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className='sec-2 mb-6'>
        <Container className='position-relative'>
          <StoriesSection/>
        </Container>
      </section>

      <section className='sec-3 mb-6'>
        <Container>
          <h2>Каталог товаров</h2>
          <ul className='list-unstyled justify-content-center row row-cols-2 row-cols-md-3 row-cols-xl-4 gx-3 gx-sm-4 gy-4 gy-sm-5'>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
          </ul>
          <button type='button' className='btn-1 mx-auto mt-3 mt-sm-5'>показать все</button>
        </Container>
      </section>

     
      <Container>
        <section className='sec-4 mb-6'>
          <Row>
            <Col md={6}>
              <h3>Выберите эскиз печати</h3>
              <p>В каталоге представлены более 80 эскизов для печатей. Также мы изготовляем печати по индивдуальному заказу.</p>
              <button type='button' className='btn-2 mt-5'>выбрать эскиз</button>
            </Col>
          </Row>
        </section>

        <section className='mb-6'>
          <h5>Популярные товары</h5>
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
        </section>
      </Container>
      

      <section className='sec-5 mb-6'>
        <Container>
          <Row className='gx-4 gy-5'>
            <Col xs={12} lg={8} xl={6}>
              <img src={Cover} alt="Cover" className='img-1'/>
            </Col>
            {
              (!isMobileLG) &&
              <>
                <Col md={4} xl={3}><ArticleCard /></Col>
                <Col md={4} xl={3}><ArticleCard /></Col>
                <Col md={4} xl={3}><ArticleCard /></Col>
                <Col md={4} xl={3}><ArticleCard /></Col>
                <Col md={4} xl={3}><ArticleCard /></Col>
                <Col md={4} xl={3}>
                  <Link to="/" className="cover">
                    <img src={More} alt="more" className='img'/>
                  </Link>
                </Col>
              </>
            }
          </Row>
          {
            (isMobileLG) &&
            <Swiper
              className='articles-slider'
              spaceBetween={20}
              slidesPerView={'auto'}
            >
              <SwiperSlide>
                <ArticleCard />
              </SwiperSlide>
              <SwiperSlide>
                <ArticleCard />
              </SwiperSlide>
              <SwiperSlide>
                <ArticleCard />
              </SwiperSlide>
              <SwiperSlide>
                <ArticleCard />
              </SwiperSlide>
              <SwiperSlide>
                <ArticleCard />
              </SwiperSlide>
              <SwiperSlide>
                <div className="cover">
                  <img src={More} alt="More" className='img'/>
                </div>
              </SwiperSlide>
            </Swiper>
          }
        </Container>
      </section>
    </main>
  );
};

export default Home;