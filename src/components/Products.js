import React, { useEffect, useState } from "react";
import Card from "./Card";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";
import Pagination from "./Pagination";

const Products = ({ query }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [hats, setHats] = useState({
    data: {},
    loading: true,
    error: false,
  });
  useEffect(() => {
    fetchFromAPI(`products/list?offset=${itemOffset}&${query}`).then((data) => {
      setHats({
        data: data.payload.products,
        pages: data.count,
        loading: false,
        error: false,
      });
    });
  }, [itemOffset]);

  if (hats.loading) {
    return <Loader />;
  }

  const allItems = hats.pages;
  const itemsPerPage = 24;
  const pageCount = Math.ceil(allItems / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allItems;
    setItemOffset(newOffset);
  };

  const cards = hats.data.map((hat) => <Card key={hat.webID} hat={hat} />);
  return (
    <div className="products">
      <div className="cards__box">{cards}</div>
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />;
    </div>
  );
};

export default Products;
