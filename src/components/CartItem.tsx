import React from "react";
import QtySelector from "./QtySelector";
import { Product } from "../utils/interfaceDetails";

type CartItemParams = {
  item: Product;
};

const CartItem = ({ item }: CartItemParams) => {
  return (
    <div className="cart__list__item">
      <div className="cart__list__item__photo">
        <img
          src={`https://media.kohlsimg.com/is/image/kohls/${item.webID}?wid=180&hei=180&op_sharpen=1`}
          alt=""
        />
      </div>
      <h3 className="cart__list__item__name">{item.productTitle}</h3>
      <QtySelector product={item} where="cart" />
      {/* <div className="cart__list__item__qty">
        <div className="cart__list__item__qty__pm">+</div>
        <div className="cart__list__item__qty__num">
          <input type="text" className="ipt" />
        </div>
        <div className="cart__list__item__qty__pm">-</div>
      </div> */}
    </div>
  );
};

export default CartItem;
