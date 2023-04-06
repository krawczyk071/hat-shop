import React from "react";
import OrderBox from "../components/OrderBox";
import Related from "../components/Related";
import HatBox from "../components/HatBox";

const Detail = () => {
  return (
    <div class="detail">
      <div class="detail__box">
        <HatBox />
        <OrderBox />
      </div>
      <Related />
    </div>
  );
};

export default Detail;
