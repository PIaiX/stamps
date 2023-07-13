import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DraftsCard from '../components/DraftsCard';

const Drafts = () => {
  const [featuresShow, setFeaturesShow] = useState(1);
  let isActive = (n) => (featuresShow === n ? 'active' : ' ')

  return (
    <main className='inner'>
      <section className='mb-5'>
        <Container>
          <h1>Эскизы печатей</h1>
          <ul className="tabs mb-4 mb-md-5">
            <li>
              <button 
                type='button'
                onClick={()=>setFeaturesShow(1)}
                className={isActive(1)}
              >Печати для ООО</button>
            </li>
            <li>
              <button 
                type='button'
                onClick={()=>setFeaturesShow(2)}
                className={isActive(2)}
              >Печати для ИП
              </button>
            </li>
            <li>
              <button 
                type='button'
                onClick={()=>setFeaturesShow(3)}
                className={isActive(3)}
              >Печати для врачей
              </button>
            </li>
          </ul>
          <Row xs={2} sm={2} md={3} lg={4} className='g-3 g-sm-4 g-xl-5'>
            <Col>
              <DraftsCard/>
            </Col>
            <Col>
              <DraftsCard/>
            </Col>
            <Col>
              <DraftsCard/>
            </Col>
            <Col>
              <DraftsCard/>
            </Col>
            <Col>
              <DraftsCard/>
            </Col>
            <Col>
              <DraftsCard/>
            </Col>
            <Col>
              <DraftsCard/>
            </Col>
            <Col>
              <DraftsCard/>
            </Col>
            <Col>
              <DraftsCard/>
            </Col>
            <Col>
              <DraftsCard/>
            </Col>
            <Col>
              <DraftsCard/>
            </Col>
            <Col>
              <DraftsCard/>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Drafts;