import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ hat }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card__item"
      onClick={() => navigate(`/detail/${hat.webID}`)}
    >
      <img src={hat.image ? hat.image.url : "non"} alt="" />
      <h3>{hat.prices[0].regularPrice.minPrice}$</h3>
      <p>{hat.productTitle}</p>
    </div>
  );
};

export default Card;
// hat.productTitle
