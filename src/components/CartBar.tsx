import React from "react";
import Cart from "./Cart";

type CartBarProps = {
  cartToggler: () => void;
  cartOpen: boolean;
};

const CartBar = ({ cartOpen, cartToggler }: CartBarProps) => {
  return (
    <div
      className={`cartbar ${!cartOpen ? "cartbar--closed" : "cartbar--opened"}`}
    >
      <div className="cartbar__closer" onClick={cartToggler}>
        Hide <i className="fa-regular fa-eye-slash"></i>
      </div>
      <Cart />
    </div>
  );
};

export default CartBar;
