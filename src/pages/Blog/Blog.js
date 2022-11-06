import React from 'react';
import './Blog.scss';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
const Blog = () => {
  return (
    <div>
    <Helmet>
      <title>Blog</title>
    </Helmet>
      <div className='breads'>
        <div className='container'>
          <div className='inner'>
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
            <span>Tin Tức</span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row blog-container'>
          <section className='blog-home col-sm-12'>
            <div className='box-heading-blog col-sm-12'>
              <h1>Tin Tức</h1>
            </div>
            <div className='col-md-12 footer-line'>
            <hr />

            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Blog;
