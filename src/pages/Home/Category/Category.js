import "./Category.scss";
import React from "react";
import img1 from "../../../assets/IMG/n21.jpg";
import img2 from "../../../assets/IMG/slide4.jpg";
import { Link } from "react-router-dom";
import img3 from "../../../assets/IMG/x31.jpg";
import img4 from "../../../assets/IMG/x11.jpg";
import Button from 'react-bootstrap/Button';

const DataCa = [
  {
    img: img1,
    display: "Trà",
    display2:
      "Trà lá: chỉ lấy nước tinh chất từ lá trà. Lá trà được phơi khô, pha chế trong bình...",
  },
  {
    img: img2,
    display: "Trà Cụ",
    display2:
      "Trà cụ là dụng cụ dùng để pha trà với nhiều mẫu mã , kiểu dáng cách điệu khác...",
  },]
  const DataCa1 =[
  {
    img: img3,
    display: "Giảm Giá",
    display2:
      "Với nhiều ưu đãi hấp dẫn Green Tea luôn mang đến cho người yêu trà có cơ hội thưởng thức...",
  },
  {
    img: img4,
    display: "Giới Thiệu",
    display2:
      "Đã bao lâu bạn không uống trà, thưởng thức trà theo đúng cách ??? GreenTea sẽ đưa bạn vào không...",
  },
];



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
