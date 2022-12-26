import React from 'react';
import { Link } from 'react-router-dom';
import "./Chidanhuongvi.scss";
import imgae_1 from '../../assets/IMG/blog-1.jpg'
import { List_sp } from '../../component/FakeData/List_blog';
import { Helmet } from 'react-helmet';
const Chidanhuongvi = () => {
  
  return (
    <div className='blog-1'>
    <Helmet>
      <title>Chỉ dẫn hương vị</title>
    </Helmet>
    <div className='blog-1_cover'>
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
            <span>
            <Link to="/blog">Tin tức</Link>
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
            </span>
            <span>Chỉ dẫn hương vị</span>
    </div>
    
    
    </div>
      
    </div>
    <div className="container">
      <div className='row'>
        <div  className='col-sm-8 blog-home'>
          <h2 className='p-name'>Chỉ dẫn hương vị</h2>
          <p>Một “từ điển” các tính từ mô tả hương vị sau đây sẽ giúp bạn vượt qua sự chung chung và nắm bắt tốt nhất các hương vị cụ thể từng loại trà, làm phong phú thêm thế giớ trà của bạn.</p>
          <p>Nên nhớ rằng không có mùi vị độc lập hay biên giới nghiêm ngặt nào giữa các từ này, mùi vị luôn tồn tại phức hợp và đôi khi các từ mô tả chồng lấp lên nhau.</p>
          <p>Khi nếm thử, chúng ta đánh giá 3 khía cạnh của trà: mùi hương, vị và dịch trà.</p>
          <h2>
          <strong>
          Mùi hương :&nbsp;
          </strong>
           
         </h2>
         <p>Là các phẩm chất của trà được cảm nhận bằng mũi.  Bạn có thể thưởng thức hương trà ở cả nước trà và sợi trà vừa pha trong ấm. Tôi thường thích thưởng thức mùi hương trong ấm trà khi vừa rót ra hết.</p>
         <p className='imgblog1'>
          <img src={imgae_1} alt='huongtra' className='img'></img>
         </p>
         <p>Để khám phá sự phong phú diệu kỳ của các hương vị, hãy nhớ bạn phải biết cách pha trà.</p>
        </div>
      <aside className='blog-slide col-sm-4'>
      <div className='widget-warp'>
        <h2 className='sesion-tittle'>
          Bài viết khác
        </h2>
        <div className='footer-line'>
          <hr></hr>
        </div>
        <ul className='caretory'>
          {
            List_sp.map((item)=>
            (
              <li>
                <Link to={item.link}>
                  {item.icon}{item.display}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>

      </aside>
      </div>
    </div>
    </div>
  );
}

export default Chidanhuongvi;
