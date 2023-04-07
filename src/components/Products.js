import React, { useEffect, useState } from "react";
import Card from "./Card";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Products = () => {
  const [hats, setHats] = useState([1]);
  useEffect(() => {
    fetchFromAPI("products/list").then((data) => {
      setHats(data.payload.products);
    });
  }, []);

  const cards = hats.map((hat) => <Card key={hat.webID} hat={hat} />);
  return <div>{cards}</div>;
};

export default Products;
