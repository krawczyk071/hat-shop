import React, { useContext } from "react";

import CartItem from "./CartItem";
import { DispatchContext, cartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const Cart = () => {
  const cart = useContext(cartContext);
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  const cartItems =
    cart && cart.map((item) => <CartItem item={item} key={item.webID} />);
  const total =
    cart &&
    cart.reduce((acc, itm) => {
      return acc + itm.qty * (Number(itm.price) * 100);
    }, 0);

  function handleOrder() {
    clearCart();
    navigate(`/confirm?t=${total}`);
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
          <h2>{formatPrice(total)}</h2>
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
