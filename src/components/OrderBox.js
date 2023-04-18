import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import QtySelector from "./QtySelector";
import { formatPrice } from "../utils/helpers";

const OrderBox = ({ detail }) => {
  const [cart, dispatch] = useContext(cartContext);

  return (
    <div className="order__box">
      <h1>{formatPrice(detail.price.regularPrice.minPrice * 100)}</h1>
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
