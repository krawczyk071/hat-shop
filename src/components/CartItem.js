import React from "react";

const CartItem = () => {
  return (
    <div class="cart__list__item">
      <div class="cart__list__item__photo">
        <img src="./img/5751456.webp" alt="" />
      </div>
      <h3>Prod name</h3>
      <div class="cart__list__item__qty">
        <div class="cart__list__item__qty__pm">+</div>
        <div class="cart__list__item__qty__num">
          <input type="text" class="ipt" />
        </div>
        <div class="cart__list__item__qty__pm">-</div>
      </div>
    </div>
  );
};

export default CartItem;
