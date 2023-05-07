import React, { useEffect, useState } from "react";
import Card from "./Card";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";
import Pagination from "./Pagination";
import { products as productsEx } from "../utils/apiExample";

const Products = ({ query }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [hats, setHats] = useState({
    data: {},
    loading: true,
    error: false,
  });
  useEffect(() => {
    setHats((prev) => ({ ...prev, loading: true }));
    fetchFromAPI(`products/list?offset=${itemOffset}&${query}`)
      .then((data) => {
        setHats({
          data: data.payload.products,
          pages: data.count,
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        console.log("API error", err);
        //Loading placeholder data
        setHats({
          data: productsEx,
          pages: 48,
          loading: false,
          error: err,
        });
      });
  }, [query, itemOffset]);

  const allItems = hats.pages;
  const itemsPerPage = 24;
  const pageCount = Math.ceil(allItems / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allItems;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  return (
    <div className="products">
      {hats.loading ? (
        <Loader />
      ) : (
        <div className="cards__box">
          {hats.data.map((hat) => (
            <Card key={hat.webID} hat={hat} />
          ))}
        </div>
      )}
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};

export default Products;
