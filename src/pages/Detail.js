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
    setDetail((prev) => ({ ...prev, loading: true }));
    fetchFromAPI(`products/detail?webID=${id}`)
      .then((data) => {
        setDetail({
          data: data.payload.products[0],
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        console.log("APIfail", err);
        //Loading placeholder data
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
        <div className="detail__sidebar">
          <OrderBox detail={detail.data} />
          <Related />
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Detail;
