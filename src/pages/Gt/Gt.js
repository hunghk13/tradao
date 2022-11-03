import React from "react";
import "./Gt.scss";
import { Link } from "react-router-dom";
import Imggt from "../../assets/IMG/gt.jpg";
import {Helmet} from "react-helmet";


export default function Gt() {
  return (
     <div className="body-gt">
     <Helmet>
      <title>Giới thiệu</title>
     </Helmet>
      <div className="col-md-12">
        <hr></hr>
      </div>
      <div className="gt">
        <div className="container">
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
            <span>Giới thiệu</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-md-12 footer-line" >
          <h1 className="page-title">Giới thiệu</h1>
          <hr></hr>
        </div>
        <div className="rte col-sm-12 ">  
       <p> <img src={Imggt} alt='tra'></img>Đã từ lâu trà không chỉ là một thứ đồ uống thông thường mà còn được coi như một nét văn hóa . Trà dùng để uống và thưởng thức các hương vị đặc biệt, trà dùng để làm những món quà biếu tặng đầy ý nghĩa</p>
       <p>Tokyoshop là một trong những cửa hàng đầu tiên chuyên bán và cung cấp các sản phẩm trà nổi tiếng của tỉnh Phúc Kiến - Trung Quốc và các sản phẩm trà Đài Loan. Chúng tôi đã được cấp chứng chỉ xác nhận đại lý của các thương hiệu trà nổi tiếng.</p>
       <p>Ngoài các sản phẩm đặc biệt về trà cửa hàng chúng tôi còn cung cấp các mặt hàng khác như dụng cụ pha trà, hương liệu trà các sản phẩm mà chúng tôi cung cấp đa phần đều là các mặt hàng cao cấp và đảm bảo chất lượng .</p>
       <p>Với mong muốn đem đến cho mọi người một nét văn hóa đặc trưng của người Á Đông chúng tôi đã tiến hành đưa sản phẩm và thương hiệu lên website tokyoshop nhằm giúp mọi người hiểu biết hơn về các sản phẩm của chúng tôi . Đồng thời chúng tôi sẽ cung cấp thêm những kiến thức về trà , về các sản phẩm trà và các kinh nghiệm , kỹ năng trong lĩnh vực này .</p>
       <p>Chúng tôi rất hoan nghênh các bạn ghé thăm cửa hàng để xem các sản phẩm. Các bạn sẽ được đón tiếp và tư vấn một cách tận tình nhất. Thay mặt cửa hàng một lần nữa chúng tôi xin cảm ơn sự quan tâm của quý khách !</p>
        
        </div>
      </div>
      </div>
  );
}
