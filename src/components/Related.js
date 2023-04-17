import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Related = () => {
  const navigate = useNavigate();
  const [related, SetRelated] = useState({ data: {}, loading: true });
  useEffect(() => {
    fetchFromAPI(
      `products/list?limit=5&offset=${Math.floor(Math.random() * 10)}`
    ).then((data) =>
      SetRelated({ data: data.payload.products, loading: false })
    );
  }, []);
  if (related.loading) {
    return <Loader />;
  }
  // console.log(related);
  const show = related.data.map((item) => (
    <div
      className="related__item"
      onClick={() => navigate(`/detail/${item.webID}`)}
    >
      <img src={item.image.url} alt="" />
    </div>
  ));
  return (
    <div className="related">
      <h1>Related</h1>
      <div className="related__box">{show}</div>
    </div>
  );
};

export default Related;
