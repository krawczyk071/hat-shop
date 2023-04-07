import React from "react";

import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__box">
        <h1>Cart:</h1>
        <div className="cart__list">
          <CartItem />
          <CartItem />
        </div>
        <button className="btn">Order</button>
        <button className="btn cart__btn--danger">Clear</button>
      </div>
    </div>
  );
};

export default Cart;
