import React from "react";

const TopItem = () => {
  return (
    <div class="top__item">
      <img src="./img/4031142.webp" alt="" />
      <p>13.44$</p>
    </div>
  );
};

const Top = () => {
  return (
    <div class="top">
      <h2>Hottest Items:</h2>
      <div class="top__box">
        <TopItem />
        <TopItem />
        <TopItem />
      </div>
    </div>
  );
};

export default Top;
