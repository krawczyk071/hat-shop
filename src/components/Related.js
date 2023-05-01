import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Related = () => {
  const navigate = useNavigate();
  const [related, SetRelated] = useState({ data: {}, loading: true });
  useEffect(() => {
    SetRelated((prev) => ({ ...prev, loading: true }));
    fetchFromAPI(
      `products/list?limit=6&offset=${Math.floor(Math.random() * 50)}`
    )
      .then((data) =>
        SetRelated({ data: data.payload.products, loading: false })
      )
      .catch((err) => {
        console.log("API fail", err);
      });
  }, []);

  return (
    <>
      {related.loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default Related;
