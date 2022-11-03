import Fancybox from "./Fancybox.js";
import './Album.scss';

import React from 'react';
import img1 from '../../../assets/IMG/11.jpg';
import img2 from '../../../assets/IMG/21.jpg';
import img3 from '../../../assets/IMG/31.jpg';
import img4 from '../../../assets/IMG/41.jpg';
import img5 from '../../../assets/IMG/51.jpg';

const imgData =[
    {
        img : img1,
    },
    {
        img : img2,
    },
    {
        img : img3,
    },
    {
        img : img4,
    },
    {
        img : img5,
    },
]






const Album = () => {
  return (
   <section className="album-client">
    <div className="box-heading">
        <h1>Album Ảnh</h1>
    </div>
    <div className="clients-r">
    <Fancybox>
        {
            imgData.map((item)=>
            (
                <div className="div-group">
                    <a data-fancybox='gallery' href={item.img} className='gallery'>
                    
                        <img src={item.img} alt=""></img>
                    </a>
                </div>
            )
            )
        }
    </Fancybox>

    </div>
   </section>
  );
}

export default Album;
