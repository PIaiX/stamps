import React from 'react';
import NavPaginationMini from '../../components/NavPaginationMini';
import LiBonus from '../../components/LiBonus';
import ReturnLink from '../../components/utils/ReturnLink';

const Bonuses = () => {
  return (
    <section className='bonus-program'>
      <div className="d-flex align-items-center mb-4">
        <ReturnLink className="mb-0" link={'/account'}/>
        <h5 className='ms-4 mb-0'>История начисления и списания бонусов</h5>
      </div>
      <div className="box">
        <ul>
          <LiBonus gift={false} income={150} spending={90}/>
          <LiBonus gift={false} income={500}/>
          <LiBonus gift={false} income={150} spending={90}/>
          <LiBonus gift={false} income={500}/>
        </ul>
        <NavPaginationMini/>
      </div>
    </section>
  );
};

export default Bonuses;