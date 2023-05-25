import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderBox from "../components/OrderBox";
import Related from "../components/Related";
import HatBox from "../components/HatBox";
import Loader from "../components/Loader";
import { fetchFromAPIDetails } from "../utils/fetchFromAPI";
import { details as detailsEx } from "../utils/apiExample";
import { Product } from "../utils/interfaceDetails";

type DetailState = {
  data: Product[];
  loading: boolean;
  error: boolean;
};

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<DetailState>({
    data: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    setDetail((prev) => ({ ...prev, loading: true }));
    fetchFromAPIDetails(`products/detail?webID=${id}`)
      .then((data) => {
        setDetail({
          data: data.payload.products,
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        console.log("APIfail", err);
        //Loading placeholder data
        setDetail({
          data: detailsEx.payload.products,
          loading: false,
          error: true,
        });
      });
  }, [id]);

  return !detail.loading && detail.data.length !== 0 ? (
    <div className="detail">
      <div className="detail__box">
        <HatBox detail={detail.data[0]} />
        <div className="detail__sidebar">
          <OrderBox detail={detail.data[0]} />
          <Related />
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Detail;
