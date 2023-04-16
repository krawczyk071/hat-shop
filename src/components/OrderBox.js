import React from "react";

const OrderBox = ({ detail }) => {
  return (
    <div className="order__box">
      <h1>{detail.price.regularPrice.minPrice}$</h1>
      <p>
        This product is not eligible for coupons. However, you are able to earn
        and redeem Kohl's Cash® and Kohl's Rewards® on this product.
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
