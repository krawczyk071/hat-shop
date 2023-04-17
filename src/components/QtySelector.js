import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

const QtySelector = ({ product }) => {
  const [cart, dispatch] = useContext(cartContext);

  return (
    <div className="qty">
      <div
        className="qty__add"
        onClick={() =>
          dispatch({ type: "ADD_TO_CART", payload: { item: product } })
        }
      >
        +
      </div>
      <div className="qty__num">
        <input
          type="text"
          className="ipt"
          value={cart.find((i) => i.webID === product.webID)?.qty || 0}
        />
      </div>
      <div
        className="qty__sub"
        onClick={() =>
          dispatch({ type: "SUB_FROM_CART", payload: { item: product } })
        }
      >
        -
      </div>
    </div>
  );
};

export default QtySelector;
