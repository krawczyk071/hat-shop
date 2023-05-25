import React from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { Product } from "../utils/interfaceList";

type CardProps = {
  hat: Product;
};

const Card = ({ hat }: CardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="card__item"
      onClick={() => navigate(`/detail/${hat.webID}`)}
    >
      <div className="card__item__img">
        <img src={hat.image ? hat.image.url : "non"} alt="" />
      </div>
      <h3 className="card__item__price">
        {formatPrice((hat?.prices[0].regularPrice.minPrice || 0) * 100)}
      </h3>
      <p className="card__item__text">{hat.productTitle}</p>
    </div>
  );
};

export default Card;
// hat.productTitle
