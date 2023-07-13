import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offer from '../components/Offer';
import ArticleCardMidi from '../components/ArticleCardMidi';
import useIsMobile from '../hooks/isMobile';

const Articles = () => {
  const mobileMD = useIsMobile('767px');

  return (
    <main className='inner'>
      <section className='mb-2 mb-sm-3 mb-md-4 mb-lg-5'>
        <Container>
          <h1>Новости и статьи</h1>
          <Row className='gx-lg-5 flex-md-row-reverse'>
            <Col md={4}>
              <h5>Новости по категориям</h5>
              <ul className='list-unstyled d-flex flex-wrap mb-4 mb-md-5'>
                <li className='me-2 mb-2'>
                  <button type='button' className='btn-22 fs-09'>Тег 1</button>
                </li>
                <li className='me-2 mb-2'>
                  <button type='button' className='btn-22 fs-09'>категория новостей</button>
                </li>
                <li className='me-2 mb-2'>
                  <button type='button' className='btn-22 fs-09'>новости</button>
                </li>
                <li className='me-2 mb-2'>
                  <button type='button' className='btn-22 fs-09'>категория №2</button>
                </li>
                <li className='me-2 mb-2'>
                  <button type='button' className='btn-22 fs-09'>Тег 2</button>
                </li>
              </ul>
              {
                (!mobileMD) &&
                <Offer blackText={false} img={"imgs/offers/offer1.jpg"} title={'Весна пришла'} subtitle={'А с ней новые вкусы роллов!'}/>
              }
            </Col>
            <Col md={8}>
              <ul className='list-unstyled'>
                <li><ArticleCardMidi/></li>
                <li><ArticleCardMidi/></li>
                <li><ArticleCardMidi/></li>
                <li><ArticleCardMidi/></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Articles;