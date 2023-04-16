import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";

const ProdReviews = ({ id }) => {
  //   const id = "4044026";
  const [review, setReview] = useState({
    data: {},
    loading: true,
    error: false,
  });
  useEffect(() => {
    fetchFromAPI(
      `reviews/list?ProductId=${id}&Limit=6&Offset=0&Sort=SubmissionTime%3Adesc`
    ).then((data) => {
      setReview({
        data: data.payload.Results,
        loading: false,
        error: false,
      });
    });
  }, [id]);

  if (review.loading) {
    return <Loader />;
  }
  const rev = review.data
    .filter((r) => r.ReviewText)
    .map((r) => {
      return (
        <div>
          <p>{r.Title}</p>
          <p>{r.ReviewText}</p>
          <p>{r.SubmissionTime}</p>
          <p>{r.Rating}</p>
          <p>{r.UserNickname}</p>
          <p>NEXT</p>
        </div>
      );
    });
  return <div>{rev}</div>;
};

export default ProdReviews;
