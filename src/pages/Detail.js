import React, { useEffect, useState } from "react";
import OrderBox from "../components/OrderBox";
import Related from "../components/Related";
import HatBox from "../components/HatBox";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "../components/Loader";
import { details as detailsEx } from "../utils/apiExample";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({
    data: {},
    loading: true,
    error: false,
  });
  useEffect(() => {
    fetchFromAPI(`products/detail?webID=${id}`)
      .then((data) => {
        setDetail({
          data: data.payload.products[0],
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        setDetail({
          data: detailsEx.payload.products[0],
          loading: false,
          error: true,
        });
      });
  }, [id]);
  return !detail.loading ? (
    <div className="detail">
      <div className="detail__box">
        <HatBox detail={detail.data} />
        <OrderBox detail={detail.data} />
      </div>
      <Related />
    </div>
  ) : (
    <Loader />
  );
};

export default Detail;
// SKUS.color
// size
// availableColr
