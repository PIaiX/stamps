import React from 'react';
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccountMenu from '../pages/account/AccountMenu';
import {Link} from 'react-router-dom';
import NavBreadcrumbs from '../components/utils/NavBreadcrumbs';
import SettingsIcon from '../components/svgs/SettingsIcon';
import ReplacementMini from '../assets/imgs/replacement-mini.png';

const AccountLayout = ({isMobile}) => {
  return (
    <main className='account inner'>
      <Container className='pt-4 pt-lg-0'>
        {
          (isMobile)
          ? <Outlet/>
          : <div>
            <h1 className='mb-2'>Личный кабинет</h1>
            <NavBreadcrumbs/>
            <Row className="account-top gx-3 gx-xl-4">
              <Col lg={5} xl={4}>
                <div className="box w-100 h-100 d-flex justify-content-between align-items-center p-4">
                  <div>
                    <div className='d-flex align-items-center'>
                      <span className="fw-5">Элли</span>
                      <span className='main-color fs-12 mx-3'>•</span>
                      <a href="tel:+79198563658">+7 919 856-36-58</a>
                    </div>
                    <div className='mt-2 dark-gray'>
                      <a href="mailto:GreatOZ@mail.com">GreatOZ@mail.com</a>
                    </div>
                  </div>
                  <Link to='/account/settings' className='dark-gray ms-4'>
                    <SettingsIcon/>
                  </Link>
                </div>
              </Col>
              <Col lg={2}>
                <div className="box w-100 h-100 d-flex flex-column justify-content-between text-center">
                  <p className='fs-09 fw-5'>Вы можете потратить</p>
                  <p className='color-2 fw-5'>
                    <span className='fs-18'>102</span>&nbsp;<span className='fs-11'>бонуса</span>
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <div className="img-block">
                  <img src={ReplacementMini} alt="ReplacementMini" />
                </div>
              </Col>
            </Row>

            <div className="row gx-3 gx-xl-4">
              <div className="col-4 col-lg-3">
                <AccountMenu/>
              </div>
              <div className="col-8 col-lg-9"><Outlet/></div>
            </div>
          </div>
        }
      </Container>
    </main>
  );
};

export default AccountLayout;