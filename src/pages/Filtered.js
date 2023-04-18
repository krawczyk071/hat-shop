import React from "react";
import Products from "../components/Products";

const Filtered = () => {
  return (
    <div>
      <Products query={`dimensionValueID=Silhouette:Beanie`} />
    </div>
  );
};

export default Filtered;
