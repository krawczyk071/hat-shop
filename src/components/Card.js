import React from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const Card = ({ hat }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card__item"
      onClick={() => navigate(`/detail/${hat.webID}`)}
    >
      <img src={hat.image ? hat.image.url : "non"} alt="" />
      <h3>{formatPrice(hat.prices[0].regularPrice.minPrice * 100)}</h3>
      <p>{hat.productTitle}</p>
    </div>
  );
};

export default Card;
// hat.productTitle
