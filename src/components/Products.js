import React, { useEffect, useState } from "react";
import Card from "./Card";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";

const Products = () => {
  const [hats, setHats] = useState({
    data: {},
    loading: true,
    error: false,
  });
  useEffect(() => {
    fetchFromAPI("products/list").then((data) => {
      setHats({
        data: data.payload.products,
        loading: false,
        error: false,
      });
    });
  }, []);

  if (hats.loading) {
    return <Loader />;
  }
  const cards = hats.data.map((hat) => <Card key={hat.webID} hat={hat} />);
  return <div className="cards__box">{cards}</div>;
};

export default Products;
