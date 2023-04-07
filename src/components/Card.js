import React from "react";

const Card = ({ hat }) => {
  return (
    <div className="card__item">
      <img src={hat.image ? hat.image.url : "non"} alt="" />
      <h3>13.44$</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
        consectetur? Lorem ipsum dolor sit amet consectetur adipisicing eli
      </p>
    </div>
  );
};

export default Card;
// hat.productTitle
