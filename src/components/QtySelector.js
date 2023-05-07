import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

const QtySelector = ({ product, where, qty, addQty }) => {
  const [cart, dispatch] = useContext(cartContext);
  return (
    <div className={where === "cart" ? "cart__list__item__qty" : "qty"}>
      <div
        className={where === "cart" ? "cart__list__item__qty__pm" : "qty__add"}
        onClick={() =>
          where !== "cart"
            ? addQty(1)
            : dispatch({
                type: "ADD_TO_CART",
                payload: { item: product, qty: 1 },
              })
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
          value={
            where !== "cart"
              ? qty
              : cart.find((i) => i.webID === product.webID)?.qty || 0
          }
          readOnly
        />
      </div>
      <div
        className={where === "cart" ? "cart__list__item__qty__pm" : "qty__sub"}
        onClick={() =>
          where !== "cart"
            ? addQty(-1)
            : dispatch({
                type: "SUB_FROM_CART",
                payload: { item: product, qty: -1 },
              })
        }
      >
        -
      </div>
    </div>
  );
};

export default QtySelector;
