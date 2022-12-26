import './News.scss';
import React from 'react';
import img1 from'../../../assets/IMG/trav2.jpg';
import img2 from'../../../assets/IMG/travn2.jpg';
import img3 from'../../../assets/IMG/pc.jpg';
import { Link } from 'react-router-dom';


const Data_News=[
    {
        img:img1,
        display:'Chỉ dẫn hương vị',
        time:'16/10/2022- Đăng bởi HK',
        links:'/chidanhuongvi',
    },
    {
        img:img2,
        display:'Cách pha trà',
        time:'16/10/2022- Đăng bởi HK',
        links:'/cachphatra',

    },
    {
        img:img3,
        display:'Người việt uống trà hay thưởng trà',
        time:'16/10/2022- Đăng bởi HK',
        links:'/nguoivietuongtrahaythuongtra',

    },
]


const News = () => {
  return (
   <section className='section-blog'>
    <div className='container'>
        <div className='main-blog'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='box-heading'>
                        <h1>Tin Tức Mới</h1>
                    </div>
                </div>
                {Data_News.map((item)=>(
                    <div className='col-md-4 col-sm-6 main-article'>
                        <div className='row'>
                            <div className='col-md-12 col-sm-12 main-article-home'>
                                <Link to={item.links} className='artice-img'>
                                    <img src={item.img} alt={item.display}></img>
                                </Link>
                            </div>
                            <div className='col-md-12 col-sm-12 '>
                                <h2 className='artice-title'>
                                <Link to={item.links}>
                                   {item.display}
                                </Link>
                                </h2>
                                <p>
                                    <span className='artice-info'>{item.time}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
   </section>
  );
}

export default News;
