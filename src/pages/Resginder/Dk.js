import React from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import FormResign from './FormResign';

const Dk = () => {
  return (
    <div>
    <Helmet>
      <title>Đăng kí</title>
    </Helmet>
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
            <span>Đăng ký</span>
          </div>
          <FormResign></FormResign>
        </div>
      
  

    </div>
    </div>
  );
}

export default Dk;
