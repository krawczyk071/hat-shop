import React from "react";

const OrderBox = () => {
  return (
    <div class="order__box">
      <h1>33.44$</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        unde dicta, harum asperiores reiciendis voluptates illo eius ab
        nesciunt. Ex!
      </p>
      <div class="qty">
        <div class="qty__add">+</div>
        <div class="qty__num">
          <input type="text" class="ipt" />
        </div>
        <div class="qty__sub">-</div>
      </div>
      <button class="btn">Add to order</button>
    </div>
  );
};

export default OrderBox;
