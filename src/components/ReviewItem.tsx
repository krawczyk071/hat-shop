import React from "react";
import Stars from "./Stars";

type Props = {
  review: {
    rating: number;
    short: string;
    name: string;
  };
};

const ReviewItem = ({ review }: Props) => {
  return (
    <div className="review__item">
      <Stars rating={review.rating} />
      <p>{review.short}</p>
      <p>{review.name}</p>
    </div>
  );
};

export default ReviewItem;
