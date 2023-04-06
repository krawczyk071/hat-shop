import React from "react";

import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div class="cart">
      <div class="cart__box">
        <h1>Cart:</h1>
        <div class="cart__list">
          <CartItem />
          <CartItem />
        </div>
        <button class="btn">Order</button>
        <button class="btn cart__btn--danger">Clear</button>
      </div>
    </div>
  );
};

export default Cart;
