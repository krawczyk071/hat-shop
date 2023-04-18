import React, { useContext } from "react";

import CartItem from "./CartItem";
import { cartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/helpers.js";

const Cart = () => {
  const [cart, dispatch] = useContext(cartContext);
  const navigate = useNavigate();

  const cartItems = cart.map((item) => <CartItem item={item} />);
  const total = cart.reduce((acc, itm) => {
    return formatPrice((acc + itm.qty * itm.price) * 100);
  }, 0);
  function handleOrder() {
    clearCart();
    navigate(`/confirm?${total}`);
  }
  function clearCart() {
    dispatch({ type: "CLEAR" });
  }
  return (
    <div className="cart">
      <div className="cart__box">
        <h1>Your items:</h1>
        <div className="cart__list">{cartItems}</div>
        <div className="cart__total">
          <h2>Total:</h2>
          <h2>{total}</h2>
        </div>

        <button className="btn" onClick={handleOrder}>
          Order
        </button>
        <button className="btn cart__btn--danger" onClick={clearCart}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Cart;
