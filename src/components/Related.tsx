import React, { useEffect, useState } from "react";
import { fetchFromAPIProducts } from "../utils/fetchFromAPI";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { Product } from "../utils/interfaceList";

type RelState = {
  data: Product[];
  loading: boolean;
  error: boolean;
};

const Related = () => {
  const navigate = useNavigate();
  const [related, SetRelated] = useState<RelState>({
    data: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    SetRelated((prev) => ({ ...prev, loading: true }));
    fetchFromAPIProducts(
      `products/list?limit=6&offset=${Math.floor(Math.random() * 50)}`
    )
      .then((data) =>
        SetRelated({
          data: data.payload.products,
          loading: false,
          error: false,
        })
      )
      .catch((err) => {
        console.log("API fail", err);
      });
  }, []);

  if (related.loading) {
    return <Loader />;
  }

  return (
    <div className="related">
      <h1>Related</h1>
      <div className="related__box">
        {related.data.map((item) => (
          <div
            key={item.webID}
            className="related__item"
            onClick={() => navigate(`/detail/${item.webID}`)}
          >
            <img src={item.image.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Related;
