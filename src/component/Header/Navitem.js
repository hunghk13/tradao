import { BsChevronDown } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import {BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import {BsTwitter } from "react-icons/bs";
import {AiOutlineUserAdd,AiOutlineUser} from "react-icons/ai";




export const Submenu = [
    { id:1,
      display : "Trà cụ",
      path:'/tracu',
      cName : "sub-m",
    },
    { id:2,
        
      display : "Trà Nhật Bản",
      path:'/tranhatban',
      cName : "sub-m",

    },
    { 
        id:3,
        display : "Trà Việt Nam",
        path:'/traVN',
      cName : "sub-m",

      },
      {
        id:4,
        display : "Trà Anh Quốc",
        path:'/traAQ',
      cName : "sub-m",

      },
      { 
        id:5,
        display : "Trà Trung Quốc",
        path:'/trachina',
      cName : "sub-m",

      },
    ];

    export const nav_link =[
        {
          display : "Trang chủ",
          path:'/',
        },
        {
          display : "Giới thiệu",
          path:'/GT',
        },
        {
          display : "Sản phẩm",
          path:'/product',
          icon : <BsChevronDown />,
        },
        {
          display : "Blog",
          path:'/Blog',
        },
        {
          display : "Cart",
          path:'/Cart',
          icon : <BsCart3 />,
        },
      ];

    export const Icons =[
      {
        icon : <BsFacebook />,
        path : '/',
        class:'intro-login',
      },
      {
        icon : <BsGithub />,
        path : '/',
        class:'intro-login',
      },
        {
          icon : <BsInstagram />,
          path : '/',
          class:'intro-login',
        },

        {
          icon: <BsTwitter />,
          path : '/',
          class:'intro-login',
        },
        {
          icon: 'Đăng nhập',
          path :'/Login',
         class:"intro-login",
        },
        {
          icon: 'Đăng kí',
          path :'/regin',
          class:'intro-login',
        },

    ];
      
    export const Icons_1 =[
      {
        icon : <BsFacebook />,
        path : '/',
        class:'icon-mobile',
      },
      {
        icon : <BsGithub />,
        path : '/',
        class:'icon-mobile',
      },
        {
          icon : <BsInstagram />,
          path : '/',
          class:'icon-mobile',
        },

        {
          icon: <BsTwitter />,
          path : '/',
          class:'icon-mobile',
        },
        {
          icon: <AiOutlineUser/>,
          path :'/Login',
         class:'icon-mobile',
        },
        {
          icon: <AiOutlineUserAdd />,
          path :'/regin',
          class:'icon-mobile',
        },

    ];
      