import React from 'react';
import LiNotification from '../../components/LiNotification';
import ReturnLink from '../../components/utils/ReturnLink';

const Notifications = () => {
  return (
    <section className='notifications'>
      <div className="d-flex align-items-center mb-4">
        <ReturnLink className="mb-0 me-4 d-lg-none" link={'/account'}/>
        <h5 className='mb-0'>Уведомления</h5>
      </div>
      <ul className='notifications-list'>
        <LiNotification/>
        <LiNotification/>
        <LiNotification/>
        <LiNotification/>
      </ul>
    </section>
  );
};

export default Notifications;