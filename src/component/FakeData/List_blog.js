import {BsFillCaretRightFill} from 'react-icons/bs';
import img3 from "../../assets/IMG/x31.jpg";
import img4 from "../../assets/IMG/x11.jpg";
import img1 from "../../assets/IMG/n21.jpg";
import img2 from "../../assets/IMG/slide4.jpg";

import {BiTime , BiUser} from 'react-icons/bi';
import img5 from '../../assets/IMG/trav2.jpg';
import img6 from '../../assets/IMG/travn2.jpg';
import img7 from '../../assets/IMG/pc.jpg';

export const List_sp =[
  {
    link:'/chidanhuongvi',
    display:'Chỉ dẫn hương vị',
    icon : <BsFillCaretRightFill />,
  },
  {
    link:'/cachphatra',
    display:'Cách pha trà',
    icon : <BsFillCaretRightFill />,
  },
  {
    link:'/nguoivietuongtrahaythuongtra',
    display:'Người Việt uống trà hay thưởng trà',
    icon : <BsFillCaretRightFill />,
  },
];

export const DataCa = [
  {
    img: img1,
    display: "Trà",
    display2:
      "Trà lá: chỉ lấy nước tinh chất từ lá trà. Lá trà được phơi khô, pha chế trong bình...",
  },
  {
    img: img2,
    display: "Trà Cụ",
    display2:
      "Trà cụ là dụng cụ dùng để pha trà với nhiều mẫu mã , kiểu dáng cách điệu khác...",
  },]
  export const DataCa1 =[
  {
    img: img3,
    display: "Giảm Giá",
    display2:
      "Với nhiều ưu đãi hấp dẫn Green Tea luôn mang đến cho người yêu trà có cơ hội thưởng thức...",
  },
  {
    img: img4,
    display: "Giới Thiệu",
    display2:
      "Đã bao lâu bạn không uống trà, thưởng thức trà theo đúng cách ??? GreenTea sẽ đưa bạn vào không...",
  },
];

export const Data_News1=[
  {
      img:img5,
      display:'Chỉ dẫn hương vị',
      icontime: <BiTime />,
      iconuser: <BiUser />,

      time:'16/10/2022',
      user:'HK',
      links:'/chidanhuongvi',
      text:"Một “từ điển” các tính từ mô tả hương vị sau đây sẽ giúp bạn vượt qua sự...",
  },
  {
      img:img6,
      display:'Cách pha trà',
      icontime: <BiTime />,
      iconuser: <BiUser />,
      user:'HK',
      
      time:'16/10/2022',
      links:'/cachphatra',
      text :'Mọi người thường nghĩ pha trà rất công phu phức tạp, nên cũng hình thành 2 “trường phái”,...',

  },
  {
      img:img7,
      display:'Người việt uống trà hay thưởng trà',
      icontime: <BiTime />,
      iconuser: <BiUser />,
      user:'HK',

      time:'16/10/2022',
      links:'/nguoivietuongtrahaythuongtra',
      text : "1, Việt Nam đất nước vùng chè . Trồng chè thái nguyên ở Việt Nam là một trong những cái...",

  },
]