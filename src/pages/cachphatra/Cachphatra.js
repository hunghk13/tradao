import React from 'react';
import { Link } from 'react-router-dom';

import imgae_1 from '../../assets/IMG/cachphatra.jpg'
import { List_sp } from '../../component/FakeData/List_blog';
import { Helmet } from 'react-helmet';
const Cachphatra = () => {
  
  return (
    <div className='blog-1'>
    <Helmet>
      <title>Cách pha trà</title>
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
            <span>Cách pha trà</span>
    </div>
    
    
    </div>
      
    </div>
    <div className="container">
      <div className='row'>
        <div  className='col-sm-8 blog-home'>
          <h2 className='p-name'>Cách pha trà</h2>
          <p>Mọi người thường nghĩ pha trà rất công phu phức tạp, nên cũng hình thành 2 “trường phái”, một là hời hợt vì không thích tìm hiểu, hai là sa đà vào những phương thức huyền hoặc không thực tế. Tôi sẽ chỉ cho bạn 3 điểm đơn giản để có một chén chà ngon. Ai cũng biết các bước pha trà cơ bản, là trà khô được hãm bằng nước sôi trong ấm và rót ra chén thưởng thức. Pha trà không phức tạp đến mức bạn phải là một chuyên gia nhưng cũng không phải đơn giản chỉ là ngâm trà trong ấm.</p>
          <p className='imgblog1'>
          <img src={imgae_1} alt='huongtra' className='img'></img>
         </p>
         <h1>
          <strong>
          3 Yếu tố quan trọng nhất trong pha trà :&nbsp;
          </strong>
           
         </h1>
          <p>Bí quyết để pha trà ngon nằm trong 3 yếu tố: Nhiệt độ nước, Lượng trà và thời gian hãm.</p>
          <h2>Nhiệt độ nước</h2>
          <p>Tất nhiên pha trà phải dùng nước nóng, nhưng nóng bao nhiêu thì mỗi loại trà lại thích hợp với một nhiệt độ khác nhau. Nước vừa sôi chỉ phù hợp với trà đen hoặc trà ô long già, nó cần nhiệt độ cao để phá vỡ các kết cấu và phát tán hương vị. Nhưng phải dùng nước nguội hơn cho các loại trà có hương vị tinh tế, như trà xanh, trà ô long. Nước quá nóng sẽ làm trà bị “cháy”, làm cho trà bị đắng chát và mất đi các hương vị tinh tế, nhưng  nước quá nguội cũng sẽ làm hương vị trà yếu đi rất nhiều vì các hợp chất trong trà không được hòa tan.</p>
          <h2>Lượng trà</h2>
         
         <p>Lượng trà quá nhiều sẽ làm trà quá đắng (và tốn kém ^__^), nhưng quá ít trà thì hương vị sẽ rất yếu không đủ thưởng thức. Tuỳ vào từng loại trà sẽ có định lượng khác nhau. Một tỉ lệ mà các bạn có thể bắt đầu thử là 8g trà cho một ấm 300ml, sau đó bạn có thể gia giảm lượng trà cho phù hợp với khẩu vị của mình.</p>
         <h2>Thời gian hãm</h2>
         
         <p>Kỵ nhất trong pha trà là “ngâm” trà, nhưng lỗi này hầu hết mọi người đều mắc phải, nó sẽ làm trà quá đắng chát và có mùi nẫu. Giống như nhiệt độ nước, mỗi loại trà sẽ phù hợp với một thời gian hãm nhất định. Trà đen, trà ô long có thể ngâm lâu hơn nhưng trà xanh thì nhanh hơn nhiều. Nhìn chung thời gian hãm trà được tính bằng giây chứ không phải bằng phút.</p>
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

export default Cachphatra;
