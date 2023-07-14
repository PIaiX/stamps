import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useIsMobile from '../../hooks/isMobile'
import NavBreadcrumbs from '../../components/utils/NavBreadcrumbs';
import AccountTitleReturn from '../../components/AccountTitleReturn';
import InputPassword from '../../components/utils/InputPassword';

const Settings = () => {
  const isMobileLG = useIsMobile('991px');

  return (
    <main className='account mb-2 mb-sm-3 mb-md-0'>
      <Container className='pt-4 pt-lg-0'>
        {
          (isMobileLG)
          ? <AccountTitleReturn link={'/account'} title={'Внесите изменения'} />
          : <>
            <h1 className='mb-2'>Личный кабинет</h1>
            <NavBreadcrumbs/>  
          </>
        }
        <form action="">
          <h5>Настройки</h5>
          <Row>
            <Col xs={12} md={6} lg={5}>
              <label className='mb-3'>
                <span className='me-1 me-sm-3'>Включить пуш-уведомления</span>
                <input type="checkbox" role="switch" />
              </label>
              <label>
                <span className='me-1 me-sm-3'>Подписаться на рассылку</span>
                <input type="checkbox" role="switch" />
              </label>
            </Col>
            <Col xs={12} md={9} lg={8}>
              <div className="box p-3 p-sm-4 my-4">
                <Row md={2} className='fs-11 g-4'>
                  <Col>
                    <div className="input-labeled">
                      <span>Имя</span>
                      <input type="text" placeholder='Имя' defaultValue={'Алексей'}/>
                    </div>
                  </Col>
                  <Col>
                    <div className="input-labeled">
                      <span>Дата рождения</span>
                      <input type="date"/>
                    </div>
                  </Col>
                  <Col>
                    <div className="input-labeled">
                      <span>Номер</span>
                      <input type="tel" placeholder='+7' defaultValue={'+7 919 856-36-58'}/>
                    </div>
                  </Col>
                  <Col>
                    <div className="input-labeled">
                      <span>Электронный адрес</span>
                      <input type="email" placeholder='mail@mail.ru' defaultValue={'kot_lesha@mail.com'}/>
                    </div>
                  </Col>
                  <Col>
                    <div className="input-labeled">
                      <span>Пароль</span>
                      <InputPassword/>
                    </div>
                  </Col>
                  <Col>
                    <div className="input-labeled">
                      <span>Подтверждение пароля</span>
                      <InputPassword/>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          
          <button type='submit' className='btn-green'>Сохранить изменения</button>
        </form>
      </Container>
    </main>
  );
};

export default Settings;