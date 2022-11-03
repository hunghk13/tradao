import './Bestsale.scss';
import React from 'react';
import tragao from '../../../assets/IMG/tragaorang.png';
import tramoccau from '../../../assets/IMG/tramoccau.jpg';
import trae from '../../../assets/IMG/trae.jpg';
import tratom from '../../../assets/IMG/tratom.jpg';
import traolong from '../../../assets/IMG/traolong.jpg';
import trasao from '../../../assets/IMG/trasao.jpg';
import trathiet from '../../../assets/IMG/trathiet.jpg';
import tram from '../../../assets/IMG/tram1.jpg';
import { Link } from 'react-router-dom';

const Dataproduct =[
    {
        img : tragao,
        display : 'Trà Gạo Rang – Genmai-cha',
        money : 'Liên hệ',
        link : '/tragao',
    },
    {
        img :tramoccau,
        display : 'Trà Móc Câu',
        money : 'Liên hệ',
        link:'/tramocau',
    },
    {
        img : trae,
        display : 'Trà No1 Anh Quốc Bầu Dục 100g',
        money : 'Giá 165,000₫',
        link:'/traenglish',
    },
    {
        img : tratom,
        display : 'Trà Nõn Tôm',
        money : 'Liên hệ',
        link: '/tratom',
    },
    {
        img : traolong,
        display : 'Trà Olong Hoa Việt Hộp gỗ',
        money : 'Liên hệ',
        link:'/traolong',
    },
    {
        img : trasao,
        display : 'Trà Sao Nhật Bản – Hoji-cha',
        money : 'Liên hệ',
        link:'/trasao',
    },
    {
        img : trathiet,
        display : 'Trà Thiết Quan Âm',
        money : 'Liên hệ',
        link:'/trathiet',
    },
    {
        img : tram,
        display : 'Trà Ướp Hoa Mộc',
        money : 'Liên hệ',
        link:'/tram',
    },
]
const Bestsale = () => {
  return (
    <section className='tabera-shop'>
    <div className='container shop-cover'>
    <div className='row'>
    <h2 className='section-title'>Sản phẩm bán chạy</h2>
    <div className='shop-variant-two clear'>
    {
        Dataproduct.map((item,index)=>(
            <div className='tabera-variant col-xs-6 col-sm-6 col-md-4 col-lg-3 '>
                <Link to={item.link} className='tabera-product'>
                    <img src ={item.img} alt={item.display}></img>
                    <span className='title'>{item.display}</span>
                    <span className='money'>
                        <i>{item.money}</i>
                    </span>
                </Link>
            </div>
        )
        )
    }
      
    </div>
    </div>
    </div>
    <div className="clear"></div>
    </section>
  );
}

export default Bestsale;
