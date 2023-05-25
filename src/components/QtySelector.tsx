import React, { useContext } from "react";
import { DispatchContext, cartContext } from "../context/cartContext";
import { Product } from "../utils/interfaceDetails";

type QtyProps = {
  product: Product;
  where?: string;
  qty?: number;
  addQty?: (i: number) => void;
};

const QtySelector = ({ product, where, qty, addQty }: QtyProps) => {
  const cart = useContext(cartContext);
  const dispatch = useContext(DispatchContext);
  return (
    <div className={where === "cart" ? "cart__list__item__qty" : "qty"}>
      <div
        className={where === "cart" ? "cart__list__item__qty__pm" : "qty__add"}
        onClick={() =>
          where !== "cart" && addQty
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
              : (cart && cart.find((i) => i.webID === product.webID)?.qty) || 0
          }
          readOnly
        />
      </div>
      <div
        className={where === "cart" ? "cart__list__item__qty__pm" : "qty__sub"}
        onClick={() =>
          where !== "cart"
            ? addQty && addQty(-1)
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
