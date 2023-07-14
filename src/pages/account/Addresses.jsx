import React from 'react';
import LiAddress from '../../components/LiAddress';
import useIsMobile from '../../hooks/isMobile';
import {Link} from 'react-router-dom';
import ReturnLink from '../../components/utils/ReturnLink';

const Addresses = () => {
  const isMobileLG = useIsMobile('991px');

  return (
    <section className='addresses'>
      {
        (isMobileLG) &&
        <div className="d-flex align-items-center mb-4">
          <ReturnLink className="mb-0" link={"/account"}/>
          <h5 className='ms-4 mb-0'>Адреса</h5>
        </div>
      }
      <div className='d-flex flex-column flex-lg-column-reverse'>
        <ul className='addresses-list w-100'>
          <LiAddress/>
          <LiAddress/>
          <LiAddress/>
          <LiAddress/>
        </ul>
        <Link to='add' className='w-xs-100 btn-2 mt-3 mt-lg-0 mb-0 mb-lg-3'>+ Добавить адрес</Link>
      </div>
    </section>
  );
};

export default Addresses;