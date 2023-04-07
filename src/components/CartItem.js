import React from "react";

const CartItem = () => {
  return (
    <div className="cart__list__item">
      <div className="cart__list__item__photo">
        <img src="./img/5751456.webp" alt="" />
      </div>
      <h3>Prod name</h3>
      <div className="cart__list__item__qty">
        <div className="cart__list__item__qty__pm">+</div>
        <div className="cart__list__item__qty__num">
          <input type="text" className="ipt" />
        </div>
        <div className="cart__list__item__qty__pm">-</div>
      </div>
    </div>
  );
};

export default CartItem;
