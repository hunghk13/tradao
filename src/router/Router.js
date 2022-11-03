import React from 'react';
import Home from '../pages/Home/Home'
import Gt from '../pages/Gt/Gt'
import Blog from '../pages/Blog/Blog'
import { Routes,Route } from 'react-router-dom';

import Product from '../pages/Product/Product';
import Cart from '../pages/Cart/Cart';
import Login from '../pages/Login/Login';


import Dk from '../pages/Resginder/Dk';

function Router() {
  return (

    <Routes>
    
      <Route path="/" element={<Home />} />;
      <Route path="/gt" element={<Gt />} />;
      <Route path="/blog" element={<Blog />} />;
      <Route path="/product" element={<Product />} />;
      <Route path="/cart" element={<Cart />} />;
      <Route path="/login" element={<Login />} />;
      <Route path="/regin" element={<Dk />} />;

    </Routes>


  );
}

export default Router;
