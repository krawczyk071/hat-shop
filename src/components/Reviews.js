import React from "react";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  return (
    <div className="reviews">
      <h2>Our customer say:</h2>
      <div className="review__box">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
    </div>
  );
};

export default Reviews;
