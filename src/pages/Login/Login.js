import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import FormLogin from './FormLogin';
import './Login.scss';

const Login = () => {
  return (
    <div>
      <Helmet><title>Đăng nhập</title></Helmet>
      <div className='login'>
        <div className='container'>
          <div className="inner">
            <Link to="/">Trang chủ</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <span>Đăng nhập</span>
          </div>
          <FormLogin></FormLogin>
        </div>
      
  

    </div>
    </div>

  );
};

export default Login;
