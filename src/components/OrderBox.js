import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

const OrderBox = ({ detail }) => {
  const [cart, dispatch] = useContext(cartContext);

  return (
    <div className="order__box">
      <h1>{detail.price.regularPrice.minPrice}$</h1>
      <p>
        This product is not eligible for coupons. However, you are able to earn
        and redeem Kohl's Cash® and Kohl's Rewards® on this product.
      </p>
      <div className="qty">
        <div
          className="qty__add"
          onClick={() =>
            dispatch({ type: "ADD_TO_CART", payload: { item: detail } })
          }
        >
          +
        </div>
        <div className="qty__num">
          <input
            type="text"
            className="ipt"
            value={cart.find((i) => i.id === detail.webID)?.qty || 0}
          />
        </div>
        <div
          className="qty__sub"
          onClick={() =>
            dispatch({ type: "SUB_FROM_CART", payload: { item: detail } })
          }
        >
          -
        </div>
      </div>
      <button className="btn">Add to order</button>
    </div>
  );
};

export default OrderBox;
