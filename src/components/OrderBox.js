import React from "react";

const OrderBox = () => {
  return (
    <div className="order__box">
      <h1>33.44$</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        unde dicta, harum asperiores reiciendis voluptates illo eius ab
        nesciunt. Ex!
      </p>
      <div className="qty">
        <div className="qty__add">+</div>
        <div className="qty__num">
          <input type="text" className="ipt" />
        </div>
        <div className="qty__sub">-</div>
      </div>
      <button className="btn">Add to order</button>
    </div>
  );
};

export default OrderBox;
