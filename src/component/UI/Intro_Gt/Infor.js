import "./Infor.scss";
import React from 'react';

import tradao from '../../../assets/IMG/tradao.jpg';

const Infor = () => {
  return (
    <div className="infor-cover">
        <section className="container clearfix ">
   <div className="collection-wrap row">
   <div className="col-md-6">
    <div className="text-info collection-text">
        <h2>Nghi Thức Trà Đạo</h2>
        <p>Nghi thức trà đạo (Cha no Yu ) chính là nghi thức pha trà, thực hiện từ bước chuẩn bị đến bước pha trà với bộ trà cụ trước mặt các vị khách trong gian phòng gọi là trà thất (Chashitsu). Những bước pha trà được gọi là temae.Nghe có vẻ đơn giản nhưng thực sự ẩn chứa nhiều ý nghĩa sâu xa.

</p>
    </div>
   </div>
            <div className="col-md-6 col-sm-push-1 ">
                <div className="img-info">
                    <img src={tradao}alt="Nghi thức trà đạo" />
                </div>
            </div>
            </div>
</section>
    </div>
   
   
  );
}


export default Infor;
