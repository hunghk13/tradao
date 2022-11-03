import React from "react";

import Slider from "../../component/UI/Silder/Silder";
import Infor from "../../component/UI/Intro_Gt/Infor";
import { Helmet } from "react-helmet";
import Category from "./Category/Category";
import Bestsale from "./Bestsale/Bestsale";
import Banermid from "./Banermid/Banermid";
import Feedback from "./feedback/Feedback";
import News from "./News/News";
import Album from "./Album/Album";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>

      <Slider />

      <Infor />

      <Category />
      <Bestsale />
      <Banermid />
      <Feedback />
      <News />
      <Album />
    </div>
  );
};

export default Home;
