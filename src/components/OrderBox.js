import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import QtySelector from "./QtySelector";

const OrderBox = ({ detail }) => {
  const [cart, dispatch] = useContext(cartContext);

  return (
    <div className="order__box">
      <h1>{detail.price.regularPrice.minPrice}$</h1>
      <p>
        This product is not eligible for coupons. However, you are able to earn
        and redeem Kohl's Cash® and Kohl's Rewards® on this product.
      </p>
      <QtySelector product={detail} />

      <button className="btn">Add to order</button>
    </div>
  );
};

export default OrderBox;
