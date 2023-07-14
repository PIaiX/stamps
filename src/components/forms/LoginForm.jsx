import React from 'react';
import {Link} from 'react-router-dom';
import InputPassword from '../utils/InputPassword';

const LoginForm = () => {
  return (
    <form action="" className='login-form'>
      <h3 className='color-2 text-start'>С возвращением!</h3>
      <p className='fs-11 mb-5'>Мы скучали по тебе :)</p>

      <div className="input-labeled mb-3">
        <span>Email</span>
        <input type="email" autocomplete="on" placeholder='Email'/>
      </div>

      <div className="input-labeled">
        <span>Пароль</span>
        <InputPassword/>
      </div>

      {/* <button type='submit' className='btn-2 mt-4 mx-auto'>Войти</button> */}
      <Link to='/account' className='btn-2 w-md-100 mt-4'>Войти</Link>
    </form>
  );
};

export default LoginForm;