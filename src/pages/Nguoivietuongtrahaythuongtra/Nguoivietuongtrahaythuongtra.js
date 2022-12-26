import React from 'react';
import { Link } from 'react-router-dom';

import imgae_1 from '../../assets/IMG/blog3.jpg'
import imgae_2 from '../../assets/IMG/chetn.jpg'

import { List_sp } from '../../component/FakeData/List_blog';
import { Helmet } from 'react-helmet';
const Nguoivietuongtrahaythuongtra = () => {
  
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
            <span>Người Việt uống trà hay thưởng trà</span>
    </div>
    
    
    </div>
      
    </div>
    <div className="container">
      <div className='row'>
        <div  className='col-sm-8 blog-home'>
          <h2 className='p-name'>Người Việt uống trà hay thưởng trà</h2>
          <p><strong>
          1, Việt Nam đất nước vùng chè
          </strong></p>
          <p>Trồng chè thái nguyên ở Việt Nam là một trong những cái nôi trà liệu lớn nhất thế giới, với những vùng nhiên liệu đã ghi tên ấn tượng trong bản đồ trà nhân loại như rừng trà Shan tuyết mọc trên chót vót vùng núi đá tai mèo ở Phìn Hồ, Hà Giang, đồi trà Tà Sùa, Thượng Sơn ở Bắc Yên, Sơn La hay những đồi chè xanh mướt ở đất Tân Cương – Thái Nguyên, Thanh Sơn – Phú Thọ, Quốc Oai – Hà Tây, Bảo Lộc – Lâm Đồng…. Tuy nhiên, xét ở góc độ tìm hiểu về các thư liệu lịch sử hay cổ tịch tinh hoa trong nước, thì lượng chữ viết về trà nghe chừng vô cùng khiêm tốn nếu đem so với các công trình trà thư của Trung Hoa hay Nhật Bản. Trong bài viết này, chúng tôi chỉ xin bàn về một góc cạnh nhỏ trong văn hóa trà Việt, đó là vấn đề thưởng trà trong văn hóa ứng xử dân gian…</p>
          <p className='imgblog1'>
          <img src={imgae_1} alt='huongtra' className='img'></img>
         </p>
         <p><strong>
         2, Chè đi từ lũy tre con sóng
          </strong></p>
          <p>Việt Nam là một quốc gia có tỷ lệ người nông thôn khá lớn, trong lịch sử đã từng chiếm đến 90% tỉ lệ dân số. Sở dĩ người viết dùng cụm từ “người nông thôn” mà không dùng cụm từ “nông dân” bởi lẽ trong nông thôn Việt Nam, giai cấp nông dân không tuyệt đối hóa tỷ lệ choán, mà còn xen kẽ các tầng lớp khác cộng cư. Nhưng bát nước chè tươi trong dân gian thì lại phần nhiều gắn đến tâm thức uống trà của người lao động chân lấm tay bùn. Có khi nồi nước chè đặt ở giữa sân, bà con lối xóm tụm năm tụm bảy dưới trăng uống nước chè tán gẫu, có khi ấm nước chè xanh theo người lên rẫy, ra đồng. Khi sáng sớm, lúc ban trưa, khi đêm trăng sáng… Nồi nước chè tươi gắn liền với đời sống người lao động. Nhiều người Việt uống nước chè thay cho các loại nước còn lại khác cần thiết cho sức khỏe con người, không đơn giản chỉ là thói quen, mà còn là nhiều vấn đề khác liên quan đến đồng tiền bát gạo.</p>
          <p className='imgblog1'>
          <img src={imgae_2} alt='huongtra' className='img'></img>
         </p>
         <p><strong>
         Chè thái nguyên đi vào cả phố phường 
          </strong></p>
          <p>Chén trà nơi quán cóc hè phố tuy không mang tải dáng dấp của nghệ thuật pha chế và thưởng thức, nhưng nó đáp ứng nhu cầu có thật của tầng lớp bình dân thành thị. Nó đã từng đi vào thơ ca và nỗi nhớ của bao người khi xa quê và là một trong những hình ảnh “hoài cổ” gắn với những nét văn hóa bình dân tương đồng khác. Chính loại hình này làm người ta nhắc nhiều hơn về trà Việt, nhờ tính phổ biến và tính tập trung của nó khi mà câu chuyện về trà Việt Nam trong con mắt quốc tế vẫn là một cái gì đó nghiêng về trà liệu là nhiều. Bởi lẽ, trà thư (sách viết về trà) của Việt Nam gần như không có. Hệ thống lý luận cũng như văn liệu về trà chỉ xuất hiện ít ỏi trong các tác phẩm văn chương, mà phần hư cấu chiếm tỷ lệ khá cao so với thực tế đời sống văn hóa ẩm trà của người Việt từ xưa đến nay. Cho nên, khi nghiên cứu về mặt lịch sử của nghệ thuật thưởng trà của người Việt, các học giả thường phải dẫn nhập từ các kinh điển lý luận của Trung Hoa hay Nhật Bản. Đó cũng là điều khiến cho nhiều người quan tâm về trà, về văn hóa trà Việt trăn trở cho một nền ltảng lý thuyết ẩm trà. Không xây dựng được cái này thì khó mà đem các giá trị của văn hóa trà Việt ra với bạn bè quốc tế.</p>
          <p> Trong những không gian thưởng trà này, mặc dù hơi hướng vẫn thoảng nét của Trung Hoa hay Nhật Bản, nhưng vẫn gợi được nét riêng của Việt Nam. Họ đã sự các trà cụ (dụng cụ pha trà) được làm từ nguyên vật liệu trong nước như ấm chén, nồi nấu trà, bàn ghế, tranh ảnh trang trí v.v… Ở đây, các kỹ thuật pha chế cũng tuân thủ nghiêm ngặt các quy tắc mang tính bất khả tùy ý như cách của người Tầu hay người Nhật. Mỗi loại trà tương ứng với từng loại ấm chén khác nhau. Nghi thức pha trà dần được hoàn thiện về mặt hình thức, trà chủ (người pha trà) được đào tạo bài bản, am hiểu các đặc tính của từng loại trà cũng như tuân thủ các thao tác pha chế đã được quy định.</p>
          <p>Đối tượng thưởng thức loại hình trà này hầu hết là trí thức. Việc mời nhau đến các không gian trà như thế này dần trở nên phổ biến và dần hình thành thói quen của nhiều tầng lớp người Việt nơi thành thị. Có khi chỉ là mượn chén trà nơi không gian này để bàn chuyện làm ăn đối với người làm doanh nghiệp, có khi là đôi bạn rủ nhau đến đây uống trà nói chuyện lứa đôi, có khi là nhưng tao nhân mặc khách tìm đến đúng với ý nghĩa của việc thưởng trà. Họ dần làm quen được với các nghi thức thưởng trà mang tính văn hóa rất cao này.</p>
        
          
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

export default Nguoivietuongtrahaythuongtra;
