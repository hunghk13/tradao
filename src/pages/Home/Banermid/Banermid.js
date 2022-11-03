import React from 'react'
import './Banermid.scss'
import { Link } from 'react-router-dom'


export default function Banermid() {
  return (
    <div className='middle-banner'>
  
      
   
        <div className='col-md-6 col-md-offset-6 middle-title clearfix'>
            <p className='headline'>Trà Việt Nam Chất Lượng</p>
            <Link to ='/product'>
            <button type="button" class="btn btn-success btn-collection btn-lg ">
              Xem tiếp
            </button>
            </Link>
        </div>
    </div>
   
  )
}
