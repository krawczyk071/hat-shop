import React, { useContext } from "react";
import { DispatchContext } from "../context/cartContext";
import QtySelector from "./QtySelector";
import { formatPrice } from "../utils/helpers";
import { useState } from "react";
import { Product } from "../utils/interfaceDetails";

type OBParams = {
  detail: Product;
};

const OrderBox = ({ detail }: OBParams) => {
  const dispatch = useContext(DispatchContext);
  const [qty, setQty] = useState(1);
  const addQty = (i: number) => {
    setQty((prev) => (prev + i > 1 ? prev + i : 1));
  };

  return (
    <div className="order__box">
      <h1>{formatPrice(detail.price.regularPrice.minPrice * 100)}</h1>
      <p>
        This product is not eligible for coupons. However, you are able to earn
        and redeem Kohl's Cash® and Kohl's Rewards® on this product.
      </p>
      <QtySelector product={detail} qty={qty} addQty={addQty} />

      <button
        className="btn"
        onClick={() => {
          dispatch({
            type: "ADD_TO_CART",
            payload: { item: detail, qty: qty },
          });
          setQty(1);
          alert("Added to basket");
        }}
      >
        Add to order
      </button>
    </div>
  );
};

export default OrderBox;
