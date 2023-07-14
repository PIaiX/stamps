import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import useIsMobile from '../hooks/isMobile';
import ReturnLink from '../components/utils/ReturnLink';
import Phone from '../components/svgs/Phone';
import WhatsApp from '../components/svgs/WhatsApp';
import { IoFootstepsSharp } from "react-icons/io5";

const Contacts = () => {
  const isMobileMD = useIsMobile('991px');

  return (
    <main className='inner'>
      <section className="sec-7 mb-3 mb-lg-5">
        <Container>
          {
            (isMobileMD) &&
            <div className='d-flex align-items-center'>
              <ReturnLink/>
              <h3 className='ms-3'>Контакты</h3>
            </div>
          }

          <Row className='flex-md-row-reverse gx-4 gxlg-5'>
            <Col xs={12} lg={8}>
              <div className="map">
                <img src="imgs/map.jpg" alt="map" />
              </div>
            </Col>
            <Col xs={12} lg={4}>
              {
                (isMobileMD)
                ? <h1 className='inner'>ООО «Ваша печать», г. Казань</h1>
                : <>
                <h1 className='inner'>Контакты </h1>
                <h5 className='fs-11 mb-3'>ООО «Ваша печать», г. Казань</h5>
                <p className='mb-3'>
                  <a href="tel:+78432901288" className='d-xl-flex'>
                    <div>
                    <HiOutlineDevicePhoneMobile className='fs-15 color-2'/>
                    <span className='fs-11 ms-2 color-2'>Горячая линия</span>
                    </div>
                    <div className='fs-11 ms-2'>+7 (843) 290-12-88</div>
                  </a>
                </p>
                <button type='button' className='btn-1'>Заказать звонок</button>
                </>
              }
              <div className="box mt-4">
                <ul>
                  <li>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <address className='flex-1'>ул. Лево-Булачная, <br/>д.24/1, 2 этаж, офис 210</address>
                      <a target='_blank' rel='noreferrer' href='https://yandex.ru/maps/-/CCUoYEHDCD' className='btn-green px-2 py-1'>
                        <span className='fs-09 me-1'>как дойти</span>
                        <IoFootstepsSharp className="fs-12"/>
                      </a>
                    </div>
                    <p className='color-2'>Доставка и самовывоз</p>
                    <p>пн-пт: 9:00 – 17:30 (без обеда)
                      <br/>сб-вс: выходной</p>
                    {
                      (isMobileMD) &&
                      <button type='button' className='btn-lightgreen w-100 rounded-2 mt-2'>Посмотреть на карте</button>
                    }
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          {
            (isMobileMD) && 
            <div>
              <a href='tel:+79879877878' className='justify-content-start btn-22 rounded-2 w-100 fs-12 mt-4'>
                <Phone className="fs-15"/>
                <span className='ms-2'>Позвонить</span>
              </a>
              <a href='/' className='justify-content-start btn-black rounded-2 w-100 fs-12 mt-2'>
                <WhatsApp className="fs-15"/>
                <span className='ms-2'>Написать в WhatsApp</span>
              </a>
            </div>
          }
        </Container>
      </section>
      
    </main>
  );
};

export default Contacts;