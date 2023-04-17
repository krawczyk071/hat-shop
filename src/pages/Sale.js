import React, { useState } from "react";
import Products from "../components/Products";
import Pagination from "../components/Pagination";

const Sale = () => {
  const [page, setPage] = useState({ current: 0 });
  function handleNext() {
    setPage((prev) => ({ ...prev, current: prev.current + 1 }));
  }
  return (
    <div>
      <Products page={page.current} />
      <Pagination page={page} handleNext={handleNext} />
    </div>
  );
};

export default Sale;
