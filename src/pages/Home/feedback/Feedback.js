import './Feedback.scss';
import React from 'react';


const Feedback_data =[
    {
        text:'Web này tiện lợi ghê !! có đầy nhiều loại trà vừa thơm lại vừa tốt cho sức khỏe. Dụng cụ trà lại đầy đủ. Mua hàng lại được hướng dẫn đầy đủ về cách pha trà cũng như cách thưởng thức...... Cảm ơn GreenShop nhé!',
     id: '— Nguyễn Thị Ngọc Mai',
     },
     {
        text:'Trà ở đây thơm qua <3 Hôm qua mình đi uống thử 1 lần mà nghiện luôn. Chịu khó dẫn bạn qua đó thưởng thức mới được.',
     id: '— Phạm Thị Thu',
     },
     {
        text:'Mấy bạn pha trà khéo ghê. Cách pha cũng hay nữa. Phải chịu khó qua đó để học cách pha mới được. :)))',
     id: '— Trần Thị Ánh',
     },
]


const Feedback = () => {
  return (
    <section className='feedback'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <h1 className='feedback-title'>Khách hàng nói về chúng tôi</h1>
             
                {
                    Feedback_data.map((item)=>(
                    <div className='feedback-text' >
                    <p className='feedback-des'>
                        {item.text}
                    </p>
                    <p className='feedback-titles'>
                       <strong>{item.id}</strong>
                     
                    </p>
                    </div>
                ))}
            </div>
            <div className='col-md-6 video'>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/rwA3k2HY_-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>

    </section>
  );
}

export default Feedback;

