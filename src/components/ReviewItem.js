import React from "react";

const ReviewItem = ({ review }) => {
  return (
    <div className="review__item">
      <div className="rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p>{review.short}</p>
      <p>{review.name}</p>
    </div>
  );
};

export default ReviewItem;
