import React from 'react';
import './Blog.scss';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { Data_News1 } from '../../component/FakeData/List_blog';






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
            {
              (Data_News1.map((item)=>(
                <div className='col-sm-4'>
                  <article className='h-entry'>
                    <div className ='h-entry-div-img'>
                      <Link to={item.links}>
                      <img src={item.img} alt={item.display}></img>
                      </Link>
                    </div>
                    <h3 className='artice-title'>
                    <Link to={item.links}>
                                   {item.display}
                                </Link>
                    </h3>
                    <ul className='blog-meta'>
                      <li>
                        <i className='icontime'>{item.icontime}</i>
                        <span className='article-info'>
                          {item.time}
                        </span>
                      </li>
                      <li>
                        <i className='iconuser'>{item.iconuser}</i>
                        <span className='artice-info'>
                          {item.user}
                        </span>
                      </li>
                    </ul>
                    <p className='articele-description'>{item.text}</p>
                  </article>
                </div>
              )))
            }

            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Blog;
