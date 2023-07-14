import React from 'react';
import AccountTitleReturn from '../../components/AccountTitleReturn';
import SelectImitation from '../../components/utils/SelectImitation';
import LiRequest from '../../components/LiRequest';
import UserMessage from '../../components/chat/UserMessage';
import ManagerMessage from '../../components/chat/ManagerMessage';
import InputFile from '../../components/utils/InputFile';
import useIsMobile from '../../hooks/isMobile';
import ReturnLink from '../../components/utils/ReturnLink';

const Support = () => {
  const isMobileLG = useIsMobile('991px');

  return (
    <section>
      <div className="d-flex d-lg-none align-items-center mb-4">
        <ReturnLink className="mb-0" link={'/account'}/>
        <h5 className='ms-4 mb-0'>Чат с поддержкой</h5>
      </div>
      <form className='support'>
        <div className="support-top">
          <div className="support-top-icon me-4">
            <img src="imgs/avatar.jpg" alt="avatar" />
            <div className="indicator active"></div>
          </div>
          <h5 className='mb-0'>Чат с поддержкой</h5>
          <span className='fs-09 mx-4'>●</span>
          <h5 className='mb-0 dark-gray'>Обращение № 26574</h5>
        </div>
        <div className="support-chat">
          <div className="chat">
            <UserMessage time={'12:37'} text={'Здравствуйте! Все приехало остывшее, заказ добирался до меня 3 часа! Карл, 3 часа! Вы бы хоть предупредили, что задерживаетесь.'}/>
            <ManagerMessage time={'12:37'} text={'Здравствуйте! Все приехало остывшее, заказ добирался до меня 3 часа! Карл, 3 часа! Вы бы хоть предупредили, что задерживаетесь.'}/>
          </div>
        </div>
        <div className="support-form">
          <input type="text" placeholder='Новое сообщение...'/>
          <button type='submit' className='btn-2 py-2 mx-3'>Отправить</button>
          <InputFile className="p-2"/>
        </div>
        <div className="support-choose">
          {
            (isMobileLG)
            ? <SelectImitation 
              btnClass={'rounded-3'}
              imgClass={'round'}
              optionsArr={[
                {
                  value: 1,
                  label: 'Обращение №1111',
                  defaultChecked: true,
                },
                {
                  value: 2,
                  label: 'Обращение №2222',
                  defaultChecked: false,
                }
              ]}
            />
            : <>
              <SelectImitation 
                btnClass={'rounded-3'}
                imgClass={'round'}
                optionsArr={[
                  {
                    value: 1,
                    label: 'По дате',
                    defaultChecked: true,
                  },
                  {
                    value: 2,
                    label: 'По порядку',
                    defaultChecked: false,
                  }
                ]}
              />
              <ul className='my-4'>
                <LiRequest/>
                <LiRequest/>
                <LiRequest/>
                <LiRequest/>
              </ul>
            </>
          }
          
        </div>
      </form>
    </section>
  );
};

export default Support;