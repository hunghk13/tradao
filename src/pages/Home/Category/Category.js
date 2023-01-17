import "./Category.scss";
import React from "react";

import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import {DataCa, DataCa1} from '../../../component/FakeData/List_blog';





const Category = () => {
  return (
    <section className="featured-link ">
      <div className="featured ">
      <div className="featured-fist">
        {DataCa.map((item, index) => (
        <div  >
            <img src={item.img} className='img-cate' alt={item.display}></img>
           
            <div className="featured-fist-text">
              <Link to="/product" className="title-cate" >{item.display}</Link>
              <p className="text-des">{item.display2}</p>
              <Link to='/product'><Button variant="success">Xem tiếp</Button></Link>

            </div>
         </div>
        
        ))}
        </div>
        <div className="featured-second">
        {DataCa1.map((item, index) => (
          <div className="featured-second-div">
            <img src={item.img} className='img-cate' alt={item.display}></img>
            <div className="featured-second-text">
              <Link to="/product" className="title-cate" >{item.display}</Link>
              <p className="text-des">{item.display2}</p>
              <Link to='/product'><Button variant="success">Xem tiếp</Button></Link>
            </div>
            </div>
        
        ))}
        </div>
        <div className ='about'>
          <div className="container">
            <h3 className="about-des">
            <em>
            "Nếu người đàn ông không uống trà, anh ấy không thể cảm nhận được sự thật và cái đẹp."
            </em>
           
            </h3>
            <div className="about-text">
            ~ Japanese Proverb ~
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
