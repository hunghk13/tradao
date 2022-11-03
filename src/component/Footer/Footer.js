import React from "react";
import { FaHome, FaMobileAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { Container, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import {BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import {BsTwitter } from "react-icons/bs";

const Lh = [
  { icon: <FaHome />, text: "Hà Đông , Hà Nội " },
  { icon: <FaMobileAlt />, text: "198999999 " },

  { icon: <IoMailSharp />, text: "hungkieu130820@gmail.com " },
];

const Sp = [
  {
    icon: <AiOutlineRight />,
    text: "Giới Thiệu",
    path: "/Gt",
  },
  {
    icon: <AiOutlineRight />,
    text: "Hướng dẫn",
    path: "/",
  },

  {
    icon: <AiOutlineRight />,
    text: "Chính sách",
    path: "/",
  },
];
 const Icon =[
  {
    icon : <BsFacebook />,
    path : '/',
  },
  {
    icon : <BsGithub />,
    path : '/',
  },
    {
      icon : <BsInstagram />,
      path : '/',
    },

    {
      icon: <BsTwitter />,
      path : '/',
    },
  ];

const Footer = () => {
  return (
    <footer className="bottom-f">
     <Container>
        <Row>
          <div className=" col-xl-4 col-lg-12 col-md-12 col-sm-12 news">
            <h6 className="title-news">Theo Dõi Bản Tin</h6>
            <input className="input-mail" type="email" placeholder="Nhập email"></input>
            <span>
              <button type="button" class="btn btn-success">
                Đăng ký
              </button>
            </span>
            <p className="letter">
              Nhận được những thông tin mới nhất từ website
            </p>
          </div>
        
            <div className="col-lg-3 col-md-5 col-sm-5 lh">
              <div className="wrap">
                <h6 className="title-news">Liên hệ</h6>
              </div>
              <ul className="widget-ul">
                {Lh.map((item) => (
                  <li>
                    {item.icon}    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-5 sp">
              <div className="wrap">
                <h6 className="title-news">Hỗ Trợ</h6>
              </div>
              <ul className="widget-ul links">
                {Sp.map((item) => (
                  <li>
                    <Link to={item.path}>
                      {item.icon}
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
         
            <div className="col-lg-2 col-md-5 col-sm-5 flow">
              <div className="wrap">
                <h6 className="title-news">Theo dõi chúng tôi</h6>
              </div>
              <ul className="widget-ul links">
                {Icon.map((item) => (
                  <li>
                    <a href={item.path}>
                      {item.icon}
                     
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="clear"></div>
            <div className="footer-line col-xl-12"><hr></hr></div>
          {/* end col-lg-8 */}
         <div className=" col-md-12 col-sm-12 ">
          @ Copyright - 2022, website made by Hùng Kiều
         </div>
          </Row>
        </Container>
        
      
    </footer>
  );
};

export default Footer;
