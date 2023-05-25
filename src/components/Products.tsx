import React, { useEffect, useState } from "react";
import { fetchFromAPIProducts } from "../utils/fetchFromAPI";
import { products as productsEx } from "../utils/apiExample";
import Card from "./Card";
import Loader from "./Loader";
import Pagination from "./Pagination";
import { Product } from "../utils/interfaceList";

type ProductProps = {
  query: string;
};

type HatsState = {
  data: Product[];
  loading: boolean;
  error: boolean;
  pages: number | null;
};

const Products = ({ query }: ProductProps) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [hats, setHats] = useState<HatsState>({
    data: [],
    loading: true,
    error: false,
    pages: 0,
  });

  useEffect(() => {
    setHats((prev) => ({ ...prev, loading: true }));
    fetchFromAPIProducts(`products/list?offset=${itemOffset}&${query}`)
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

  const allItems = hats.pages || 0;
  const itemsPerPage = 24;
  const pageCount = Math.ceil((allItems || 0) / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
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
