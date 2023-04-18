import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

const QtySelector = ({ product, where }) => {
  const [cart, dispatch] = useContext(cartContext);

  return (
    <div className={where === "cart" ? "cart__list__item__qty" : "qty"}>
      <div
        className={where === "cart" ? "cart__list__item__qty__pm" : "qty__add"}
        onClick={() =>
          dispatch({ type: "ADD_TO_CART", payload: { item: product } })
        }
      >
        +
      </div>
      <div
        className={where === "cart" ? "cart__list__item__qty__num" : "qty__num"}
      >
        <input
          type="text"
          className="ipt"
          value={cart.find((i) => i.webID === product.webID)?.qty || 0}
        />
      </div>
      <div
        className={where === "cart" ? "cart__list__item__qty__pm" : "qty__sub"}
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
