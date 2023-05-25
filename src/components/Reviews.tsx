import React from "react";
import ReviewItem from "./ReviewItem";
import { reviewData } from "../utils/constants";

const Reviews = () => {
  const reviews = reviewData
    .slice(0, 3)
    .map((r) => <ReviewItem key={r.name} review={r} />);
  return (
    <div className="reviews">
      <h2>Our customer say:</h2>
      <div className="review__box">{reviews}</div>
    </div>
  );
};

export default Reviews;
